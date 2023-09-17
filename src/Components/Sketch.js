import React, { useState } from 'react';
import ml5 from 'ml5';
import Sketch from 'react-p5';
import p5 from 'p5';

let video;
let poseNet;
let poses = [];
let sleepPrev = 0;
let prevStateTime = 0;
function P5sketch(){
    const [isSleeping, setIsSleeping] = useState(0);
    function setup(p5, CanvasParentRef) {
        
        p5.createCanvas(640, 480).parent(CanvasParentRef);
        video = p5.createCapture(p5.VIDEO);
        video.size(640, 480);

        // Create a new poseNet method with a single detection
        poseNet = ml5.poseNet(video, modelReady);
        // This sets up an event that fills the global variable "poses"
        // with an array every time new poses are detected
        poseNet.on("pose", function(results) {
            poses = results;
            //console.log(poses);
        });
        // Hide the video element, and just show the canvas
        video.hide();
    }

        function modelReady() {
            //console.log("Model Ready");
        }

        function draw(p5) {
            p5.image(video, 0, 0, 640, 480); // top left corner + bottom right corner

            // We can call both functions to draw all keypoints and the skeletons
            drawKeypoints(p5);
            drawSkeleton(p5);
        }

        // A function to draw ellipses over the detected keypoints
        function drawKeypoints(p5) {
        // Loop through all the poses detected
        for (let i = 0; i < poses.length; i += 1) {
            // For each pose detected, loop through all the keypoints
            const pose = poses[i].pose;
            for (let j = 0; j < pose.keypoints.length; j += 1) {
                // A keypoint is an object describing a body part (like rightArm or leftShoulder)
                const keypoint = pose.keypoints[j];
                // Only draw an ellipse is the pose probability is bigger than 0.2
                if (keypoint.score > 0.2) {
                    p5.noStroke();
                    p5.ellipse(keypoint.position.x, keypoint.position.y, 5, 5);
                }
            }
            // Code to see if lying down

            if(pose.leftHip.score <= 0.2 && pose.rightHip.score<=0.2) continue;
            if(pose.leftHip.score <= 0.2 && pose.rightHip.score<=0.2) continue;

            let xDif = pose.leftShoulder.x; // hip coord
            let yDif = pose.leftShoulder.y;
            if(pose.leftShoulder.score<pose.rightShoulder.score){
                xDif = pose.rightShoulder.x;
                yDif = pose.rightShoulder.y;
            }

            
            if(pose.leftHip.score<pose.rightHip.score){
                xDif = Math.abs(xDif-pose.rightHip.x);
                yDif = Math.abs(yDif-pose.rightHip.y);
            }
            else{
                xDif = Math.abs(xDif-pose.leftHip.x);
                yDif = Math.abs(yDif-pose.leftHip.y);
            }

            //console.log(xDif);
            //console.log(yDif);


            if(yDif>xDif+50){ // probably standing
                if(sleepPrev==0){
                    prevStateTime %= 100;
                    prevStateTime++;

                } 
                else{
                    sleepPrev = 0;
                    prevStateTime = 0;
                }

                if(prevStateTime>25){
                    setIsSleeping(0);
                }
            }
            else{   // probably sleeping
                
                if(sleepPrev==1){
                    prevStateTime %= 100;
                    prevStateTime++;
                } 
                
                else{
                    sleepPrev = 1;
                    prevStateTime = 0;
                }
                if(prevStateTime>25){
                    setIsSleeping(1);
                }
                
            } 
            
        }
    }

    // A function to draw the skeletons
    function drawSkeleton(p5) {
        // Loop through all the skeletons detected
        for (let i = 0; i < poses.length; i += 1) {
            const skeleton = poses[i].skeleton;
            // For every skeleton, loop through all body connections
            for (let j = 0; j < skeleton.length; j += 1) {
                const partA = skeleton[j][0];
                const partB = skeleton[j][1];
                p5.stroke(255, 0, 0);
                p5.line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
            }
        }
    }
    return(
        <div>
            <Sketch setup={setup} draw={draw} />
            Are you sleeping? {isSleeping}

        </div>
    );
}
export default P5sketch;
