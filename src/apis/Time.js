const time = () => {
    let current = new Date();
        let date = current.getFullYear() + '-' + (current.getMonth()+1) + '-' + current.getDate();
        let time = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
    
        return date + "T" + time + "Z";
    
        // The Z here is for Zulu? All hail Zulu the keeper of time zones.
}
export default time;