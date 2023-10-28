from flask import Flask, Response
import cv2

app = Flask(__name__)

# Open the default camera (webcam)
cap = cv2.VideoCapture(0)

# Function to generate video frames
def generate_frames():
    while True:
        ret, frame = cap.read()
        if not ret:
            break
        else:
            ret, buffer = cv2.imencode('.jpg', frame)
            if not ret:
                continue
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + buffer.tobytes() + b'\r\n')

def captureframe():
    # Open the default camera (webcam)
    cap = cv2.VideoCapture(0)  # 0 represents the default camera

    while True:
        # Read a frame from the camera
        ret, frame = cap.read()

        # Display the frame in a window named 'Video'
        cv2.imshow('Video', frame)

        # Check for the 'q' key to exit the loop
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

    # Release the camera and close the video window
    cap.release()
    cv2.destroyAllWindows()
# Route for video streaming
@app.route('/video')
def video(): 
    captureframe()
    return  Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")
