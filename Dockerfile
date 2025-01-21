# Base image
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build the application
RUN npm run build

# Expose port 5173 (default for Vite)
EXPOSE 5173

# Start the application
CMD ["npm", "run", "dev"]