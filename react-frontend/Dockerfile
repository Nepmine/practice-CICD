# Use a lightweight Node.js base image
FROM node:20-alpine

# Set working directory in the container
WORKDIR /app

# Copy only package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the Vite React app (output goes to /app/dist)
RUN npm run build

# Install a lightweight static file server
RUN npm install -g serve

# Expose the port to access the app from outside the container
EXPOSE 3000

# Start the server and serve the build output
CMD ["serve", "-s", "dist", "-l", "3000"]
