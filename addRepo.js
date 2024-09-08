const axios = require('axios');
require('dotenv').config();

// GitHub API base URL
const GITHUB_API_URL = 'https://api.github.com';

// Get token from .env file
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

// Function to create a new repository
async function createRepo(repoName, description = '', isPrivate = false) {
    try {
        const response = await axios.post(
            `${GITHUB_API_URL}/user/repos`,
            {
                name: repoName,
                description: description,
                private: isPrivate
            },
            {
                headers: {
                    Authorization: `token ${GITHUB_TOKEN}`
                }
            }
        );
        console.log(`Repository '${repoName}' created successfully!`);
        return response.data;
    } catch (error) {
        console.error('Error creating repository:', error.response.data.message);
    }
}

// Call the function to create a new repository
createRepo('my-new-repo', 'This is an automated repo creation', true);
