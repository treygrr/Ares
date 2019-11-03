import React from 'react';
import Axios from 'axios';
import { timeout } from 'q';

class Request extends React.Component {

    constructor (props) {
        super(props);
        this.apiAuth = 'Basic X2RlbW9fOl9kZW1vXzAw';
        this.baseURL = 'https://cors-anywhere.herokuapp.com/https://mis.ssreng.com/api/gtctracks';
        this.pageURL = '1';
        this.sizeURL = '2000';
        this.expandURL = 'detail';
    }

    getCurrentTime = () => {
        let current = new Date();
        let date = current.getFullYear() + '-' + (current.getMonth()+1) + '-' + current.getDate();
        let time = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();

        return date + "T" + time + "Z";
    }

    getRequest = async () => {
        let self = this;
        const response = await Axios.get(this.baseURL, {
            headers: {
                Authorization: self.apiAuth
            },
            params: {
               page: self.pageURL,
               size: self.sizeURL,
               updateSince: self.getCurrentTime(),
               expand: self.expandURL
            }
        });

        console.log(response);
    }


}

export default Request;