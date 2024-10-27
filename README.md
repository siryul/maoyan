# 项目名称

本项目是一个电影数据管理系统，提供服务端 API 供客户端调用。

## 项目结构

### 服务端

- **技术栈**: TypeScript, Express, MySQL, TypeORM, class-validator, class-transformer
- **功能**: 提供电影数据的增删改查接口

### 客户端

- **技术栈**: TypeScript, Vue 3, Pinia, Vue Router, Axios
- **功能**: 用户界面，允许用户浏览和管理电影数据

## 安装与运行

### 服务端

1. 克隆项目：

   ```bash
   git clone https://github.com/siryul/maoyan.git
   cd server
   ```

2. 安装依赖：

   ```bash
   npm install
   ```

3. 配置数据库连接：

   - 在 `.env` 文件中设置 MySQL 数据库连接信息。

   ```env
   USERNAME=
   PASSWORD=
   ```

4. 运行服务：
   ```bash
   npm run dev
   ```

### 客户端

1. 切换至 client：

   ```bash
   cd client
   ```

2. 安装依赖：

   ```bash
   npm install
   ```

3. 运行客户端：
   ```bash
   npm run dev
   ```

## 贡献

欢迎任何形式的贡献！请提交问题或拉取请求。

## 许可证

本项目采用 MIT 许可证，详情请参见 [LICENSE](LICENSE) 文件。
