# Use the official Node.js image from the Docker Hub as a base
FROM node:20-alpine AS builder

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json first to take advantage of Docker cache
COPY package*.json ./

# Install project dependencies
RUN npm install


# Copy all the project files to the container
COPY . .

# Run the build process (this should create a 'dist' folder)
RUN npm run build

# Use the official Nginx image to serve the built app
FROM nginx:alpine AS web

# Copy the build directory (dist) from your previous build stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Create the sites-enabled directory
RUN mkdir -p /etc/nginx/sites-enabled

# Copy the Nginx config into the container
COPY ./nginx/activeminds-umanitoba.org /etc/nginx/sites-available/activeminds-umanitoba.org
# COPY ./nginx/default.conf /etc/nginx/nginx.conf  # optional, for custom global settings

# Enable your site (create a symlink in sites-enabled)
RUN ln -s /etc/nginx/sites-available/activeminds-umanitoba.org /etc/nginx/sites-enabled/

# Expose port 80 for HTTP traffic
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]