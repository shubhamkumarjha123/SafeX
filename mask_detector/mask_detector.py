# -*- coding: utf-8 -*-
"""
Created on Sat Sep  5 17:39:20 2020

@author: Harsh Jha
"""


import cv2
import numpy as np


def ORB_detector(new_image, image_template):
    # Function that compares input image to template
    # It then returns the number of ORB matches between them
    
    image1 = cv2.cvtColor(new_image, cv2.COLOR_BGR2GRAY)

    # Create ORB detector with 1000 keypoints with a scaling pyramid factor of 1.2
    orb = cv2.ORB_create(1000, 1.2)

    # Detect keypoints of original image
    kp1, des1 = orb.detectAndCompute(image1, None)

    # Detect keypoints of rotated image
    kp2, des2 = orb.detectAndCompute(image_template, None)
    bf = cv2.BFMatcher(cv2.NORM_HAMMING, crossCheck=True)
    matches = bf.match(des1,des2)

    # Sort the matches based on distance.  Least distance
    matches = sorted(matches, key=lambda val: val.distance)
    return len(matches)

cap = cv2.VideoCapture(0)

# Load our image template, this is our reference image
image_template = cv2.imread('images/mask-1.jpg', 0) 

while True:

    # Get webcam images
    ret, frame = cap.read()        
    height, width = frame.shape[:2]

    # Define ROI Box Dimensions
    top_left_x = int(width / 3)
    top_left_y = int((height / 2) + (height / 4))
    bottom_right_x = int((width / 3) * 2)
    bottom_right_y = int((height / 2) - (height / 4))
    
    cv2.rectangle(frame, (top_left_x,top_left_y), (bottom_right_x,bottom_right_y), (127,50,127), 3)
    
    # Crop window of observation 
    cropped = frame[bottom_right_y:top_left_y , top_left_x:bottom_right_x]
   
    frame = cv2.flip(frame,1)
    
    # Get number of ORB matches 
    matches = ORB_detector(cropped, image_template)
    
    # Display current no. of matches 
    output_string = "Matches = " + str(matches)
    cv2.putText(frame, output_string, (50,450), cv2.FONT_HERSHEY_COMPLEX, 2, (250,0,150), 2)
    
    # Our threshold to indicate object deteciton
    threshold = 120
    
    # If matches exceed our threshold then object has been detected
    if matches > threshold:
        cv2.rectangle(frame, (top_left_x,top_left_y), (bottom_right_x,bottom_right_y), (0,255,0), 3)
        cv2.putText(frame,'Wearing Mask',(50,50), cv2.FONT_HERSHEY_COMPLEX, 2 ,(0,255,0), 2)
        a="Clear to go"
        print(a)
    if matches < threshold:
        cv2.rectangle(frame, (top_left_x,top_left_y), (bottom_right_x,bottom_right_y), (0,255,0), 3)
        cv2.putText(frame,'Please Wear Mask',(50,50), cv2.FONT_HERSHEY_COMPLEX, 1 ,(0,0,255), 2)
        b="Not clear"
        print(b)
    
    cv2.imshow('Object Detector using ORB', frame)
    
    if cv2.waitKey(1) == 13: 
        break

    
cap.release()
cv2.destroyAllWindows()   