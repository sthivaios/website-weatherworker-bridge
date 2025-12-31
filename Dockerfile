# Use the official Node.js LTS image
FROM node:20

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first (for caching dependencies)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app
COPY . .

# Start the app
CMD ["npm", "start"]
