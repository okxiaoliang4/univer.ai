CR = 
LOCAL_TAG = dev
PUSH_TAG ?= latest
REPOSITORY = univer-site
NS ?= univer
CTR = docker
BUILDER ?= univerdocs-builder

OSARCH = linux/amd64
image_exists=$(shell docker manifest inspect $(CR)/$(NS)/$(REPOSITORY):$(IMAGE_TAG) > /dev/null 2>&1 && echo true || echo false)

.PHONY: create_builder
# Check if the builder exists and create it if not
create_builder:
	@if ! $(CTR) buildx inspect $(BUILDER) > /dev/null 2>&1; then \
		$(CTR) buildx create --name $(BUILDER) --use; \
	fi

.PHONY: push_image
# Build and Push multi-platform Docker images for univer docs
push_image: create_builder
ifeq ($(PUSH_TAG), latest)
	$(eval image_tag=-t $(CR)/$(NS)/$(REPOSITORY):latest)
else
	$(eval image_tag=-t $(CR)/$(NS)/$(REPOSITORY):$(PUSH_TAG) -t $(CR)/$(NS)/$(REPOSITORY):latest)
endif
	$(CTR) buildx build \
	--builder $(BUILDER) \
	--platform $(OSARCH) \
	--file Dockerfile \
	$(image_tag) \
	--push .

.PHONY: check_image
# Check if the image exists
check_image:
	@echo $(image_exists)

# 打包 docker 镜像到本地 Docker 服务
.PHONY: build_image
build_image: create_builder
	$(eval image_tag=-t $(REPOSITORY):latest)
	$(CTR) buildx build \
	--builder $(BUILDER) \
	--platform $(OSARCH) \
	--file Dockerfile \
	$(image_tag) \
	--load .

# 验证本地的 docker 镜像是否工作正常
.PHONY: test_image_run
test_image_run: create_builder 
	$(eval image_tag=-t $(REPOSITORY):latest)
	$(CTR) run --rm -it -p 3000:3000 $(image_tag)
