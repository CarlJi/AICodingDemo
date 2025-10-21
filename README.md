# AICodingDemo

## 哈师大选课系统

基于 React + TypeScript 开发的课程选课系统

## 功能特性

- 学生登录
- 课程列表浏览
- 在线选课/退课
- 已选课程查看

## 技术栈

- React 18
- TypeScript
- Vite

## 快速开始

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

## 使用说明

1. 在登录页面输入任意学号
2. 密码为: 123456
3. 登录后可以查看课程列表并进行选课操作
4. 切换到"已选课程"标签查看已选课程
5. 可以随时退选已选课程

## 项目结构

```
src/
  ├── components/      # 组件目录
  │   ├── Login.tsx    # 登录组件
  │   └── CourseList.tsx  # 课程列表组件
  ├── types/          # TypeScript 类型定义
  ├── App.tsx         # 根组件
  └── main.tsx        # 入口文件
```
