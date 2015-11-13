import axios from 'axios';

const getRepos = (username) => {
    return axios.get(`https://api.github.com/users/${username}/repos`);
};

const getUserInfo = (username) => {
    return axios.get(`https://api.github.com/users/${username}`);
};


const helpers = {
    getGithubInfo(username) {
        return axios.all([getRepos(username), getUserInfo(username)])
            .then(function transferDataOut([ repos, bio ]) {
                return {
                    repos: repos.data,
                    bio: bio.data
                };
            });
    }
};

export default helpers;