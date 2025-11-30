// Daily challenge : Creating Objects

// Instructions
// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// 1. Create a class named Video. The class should be constructed with the following parameters:
// title (a string)
// uploader (a string, the person who uploaded it)
// time (a number, the duration of the video - in seconds)
// 2. Create a method called watch() which displays a string as follows:
// “uploader parameter watched all time parameter of title parameter!”
// 3. Instantiate a new Video instance and call the watch() method.
// 4. Instantiate a second Video instance with different values.
// 5. Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
// Think of the best data structure to save this information within the array.
// 6. Bonus: Loop through the array to instantiate those instances.

class Video {
    //1
    constructor(title, uploader, time) {
        this.title = title
        this.uploader = uploader
        this.time = time
    }

    //2
    watch() {
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}!`)
    }
}

//3 
const video1 = new Video("Instagram", "John", 120)
video1.watch()

//4
const video2 = new Video("Youtube", "Daniel", 400)

//5
// as an array of object for each video:
//ex: 
let videos = [
    {title: "video1", uploader: "John", time: 222},
    {title: "video2", uploader: "Jack", time: 333},
    {title: "video3", uploader: "Jane", time: 60},
    {title: "video4", uploader: "Josh", time: 7},
    {title: "video5", uploader: "Jim", time: 900}
]  

//6
for (let instance of videos) {
    const video = new Video(instance.title, instance.uploader, instance.time)
    video.watch()
}