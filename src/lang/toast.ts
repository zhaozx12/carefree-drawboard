import type { Lang } from "@noli/core";

export enum Toast_Words {
  "dropping-message" = "dropping-message",
  "uploading-image-message" = "uploading-image-message",
  "upload-image-success-message" = "upload-image-success-message",
  "upload-image-error-message" = "upload-image-error-message",
  "strange-image-error-message" = "strange-image-error-message",
  "generate-image-success-message" = "generate-image-success-message",
  "generate-image-error-message" = "generate-image-error-message",
  "post-python-http-fields-plugin-error-message" = "post-python-http-fields-plugin-error-message",
  "uploading-project-message" = "uploading-project-message",
  "adding-project-message" = "adding-project-message",
  "add-project-success-message" = "add-project-success-message",
  "save-project-success-message" = "save-project-success-message",
  "save-project-error-message" = "save-project-error-message",
  "loading-project-message" = "loading-project-message",
  "load-project-success-message" = "load-project-success-message",
  "please-select-project-message" = "please-select-project-message",
  "downloading-project-message" = "downloading-project-message",
  "importing-local-project-message" = "importing-local-project-message",
  "import-local-project-success-message" = "import-local-project-success-message",
  "import-local-project-error-message" = "import-local-project-error-message",
  "add-text-success-message" = "add-text-success-message",
  "add-text-error-message" = "add-text-error-message",
  "auto-arrange-no-need-message" = "auto-arrange-no-need-message",
  "submit-task-success-message" = "submit-task-success-message",
  "submit-task-error-message" = "submit-task-error-message",
  "downloading-nodes-message" = "downloading-nodes-message",
  "export-blob-error-message" = "export-blob-error-message",
}

export const toastLangRecords: Record<Lang, Record<Toast_Words, string>> = {
  zh: {
    [Toast_Words["dropping-message"]]: "识别中",
    [Toast_Words["uploading-image-message"]]: "上传中，请稍候",
    [Toast_Words["upload-image-success-message"]]: "上传图片成功",
    [Toast_Words["upload-image-error-message"]]: "上传图片失败",
    [Toast_Words["strange-image-error-message"]]: "图片类型错误，当前仅支持上传 jpg/png 图片",
    [Toast_Words["generate-image-success-message"]]: "生成图片成功",
    [Toast_Words["generate-image-error-message"]]: "生成图片失败",
    [Toast_Words["post-python-http-fields-plugin-error-message"]]: "请求 Python 服务时失败",
    [Toast_Words["uploading-project-message"]]: "保存项目中",
    [Toast_Words["adding-project-message"]]: "新建项目中",
    [Toast_Words["add-project-success-message"]]: "新建项目成功",
    [Toast_Words["save-project-success-message"]]: "保存项目成功",
    [Toast_Words["save-project-error-message"]]: "保存项目失败",
    [Toast_Words["loading-project-message"]]: "加载项目中，请稍候",
    [Toast_Words["load-project-success-message"]]: "加载项目成功",
    [Toast_Words["please-select-project-message"]]: "请先选择想要加载的项目",
    [Toast_Words["downloading-project-message"]]: "下载项目中",
    [Toast_Words["importing-local-project-message"]]: "导入中",
    [Toast_Words["import-local-project-success-message"]]: "导入成功",
    [Toast_Words["import-local-project-error-message"]]: "导入失败",
    [Toast_Words["add-text-success-message"]]: "添加文字成功",
    [Toast_Words["add-text-error-message"]]: "添加文字时出了些问题",
    [Toast_Words["auto-arrange-no-need-message"]]: "当前节点无需整理",
    [Toast_Words["submit-task-success-message"]]: "任务提交成功",
    [Toast_Words["submit-task-error-message"]]: "执行任务时出了些问题",
    [Toast_Words["downloading-nodes-message"]]: "下载中",
    [Toast_Words["export-blob-error-message"]]: "导出节点时出了些问题",
  },
  en: {
    [Toast_Words["dropping-message"]]: "Detecting",
    [Toast_Words["uploading-image-message"]]: "Uploading, please wait for a while",
    [Toast_Words["upload-image-success-message"]]: "Image uploaded successfully!",
    [Toast_Words["upload-image-error-message"]]: "Upload image failed",
    [Toast_Words["strange-image-error-message"]]: "Only jpg/png images are supported",
    [Toast_Words["generate-image-success-message"]]: "Image generated successfully!",
    [Toast_Words["generate-image-error-message"]]: "Generate image failed",
    [Toast_Words["post-python-http-fields-plugin-error-message"]]: "Request Python service failed",
    [Toast_Words["uploading-project-message"]]: "Saving",
    [Toast_Words["adding-project-message"]]: "Creating new project",
    [Toast_Words["add-project-success-message"]]: "Project created successfully!",
    [Toast_Words["save-project-success-message"]]: "Project saved successfully!",
    [Toast_Words["save-project-error-message"]]: "Save project failed",
    [Toast_Words["loading-project-message"]]: "Loading",
    [Toast_Words["load-project-success-message"]]: "Project loaded successfully!",
    [Toast_Words["please-select-project-message"]]: "Please select a project first",
    [Toast_Words["downloading-project-message"]]: "Downloading",
    [Toast_Words["importing-local-project-message"]]: "Importing",
    [Toast_Words["import-local-project-success-message"]]: "Imported successfully!",
    [Toast_Words["import-local-project-error-message"]]: "Import failed",
    [Toast_Words["add-text-success-message"]]: "Text added successfully",
    [Toast_Words["add-text-error-message"]]: "Something is wrong when adding Text Node",
    [Toast_Words["auto-arrange-no-need-message"]]: "There is no need to arrange the Nodes",
    [Toast_Words["submit-task-success-message"]]: "Task submitted successfully!",
    [Toast_Words["submit-task-error-message"]]: "Something is wrong when executing the task",
    [Toast_Words["downloading-nodes-message"]]: "Downloading",
    [Toast_Words["export-blob-error-message"]]: "Something is wrong when exporting Node",
  },
};
