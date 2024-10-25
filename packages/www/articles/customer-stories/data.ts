import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import matter from 'gray-matter'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export interface IArticle {
  data: {
    cover: string
    title: string
    description: string
    date: string
    slug: string
  }
  content: string
}

export default function getSotries() {
  const files: IArticle[] = []
  function walk(dir: string) {
    const list = fs.readdirSync(dir)
    list.forEach((file) => {
      file = path.join(dir, file)
      const stat = fs.statSync(file)
      if (stat && stat.isDirectory()) {
        walk(file)
      }
      else {
        if (file.endsWith('.mdx')) {
          const content = fs.readFileSync(path.resolve(__dirname, file), 'utf-8')
          const matterFile = matter(content)
          files.push({
            data: {
              cover: matterFile.data.cover,
              title: matterFile.data.title,
              description: matterFile.data.description,
              date: matterFile.data.date,
              slug: matterFile.data.slug,
            },
            content: matterFile.content,
          })
        }
      }
    })
  }
  walk(__dirname)

  return files
}
