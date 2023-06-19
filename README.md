<h1>Interactive Whiteboard</h1>

<p>This is an interactive whiteboard application built with React for the frontend and powered by a Convolutional Neural Network (CNN) trained with the MNIST dataset using TensorFlow and Keras for the backend.</p>

<h2>Features</h2>
<ul>
  <li>Draw and write on a virtual whiteboard using various colors and brush sizes.</li>
  <li>Digit recognition using a trained CNN model to identify handwritten digits.</li>
  <li>Note to user: this board has low prediction accuracy, I plan to add extra training data to the backend at some point along with making changes to the way data is sent from the whiteboard to the CNN</li>
</ul>

<h2>Demo</h2>
<img src="public/board_demo.png" alt="Demo" />

<h2>Installation</h2>
<p>To run the interactive whiteboard locally, follow these steps:</p>
<ol>
  <li>Clone the repository:<br>
    <code>git clone https://github.com/your-username/interactive-whiteboard.git</code></li>
  <li>Navigate to the project directory:<br>
    <code>cd interactive-whiteboard</code></li>
  <li>Install the dependencies:<br>
    <code>npm install</code></li>
  <li>Start the development server:<br>
    <code>npm start</code></li>
</ol>
<p>The application will be available at <a href="http://localhost:3000">http://localhost:3000</a> in your web browser.</p>

<h2>Backend Setup</h2>
<p>The backend of the interactive whiteboard is powered by a CNN trained with the MNIST dataset using TensorFlow and Keras. To set up the backend, follow these steps:</p>
<ol>
  <li>[Optional] Set up a virtual environment to isolate the Python dependencies.</li>
  <li>Install the required Python packages:<br>
    <code>pip3 install tensorflow keras numpy Flask CORS</code></li>
  <li>Run the backend server:<br>
    <code>python3 app.py</code></li>
</ol>
<p>The server will start and load the trained CNN model.</p>

<h2>Technologies Used</h2>
<ul>
  <li>React</li>
  <li>TensorFlow</li>
  <li>Keras</li>
  <li>HTML5 Canvas API</li>
  <li>Node.js</li>
  <li>Express.js</li>
  <li>Flask</li>
</ul>

<h2>Contributing</h2>
<p>Contributions are welcome! Any suggestions for increasing accuracy on this board are welcome. Fork and open a pull request if you wish.</p>

<h2>License</h2>
<p>MIT</p>

<h2>Acknowledgments</h2>
<ul>
  <li>The MNIST dataset for training the CNN model.</li>
  <li>The React community for providing useful libraries and resources.</li>
  <li>[Insert any additional acknowledgments or credits you deem necessary]</li>
</ul>

<h2>Contact</h2>
<p>For any inquiries or questions, feel free to reach out to the project maintainer:</p>
<ul>
  <li>Name: [Your Name]</li>
  <li>Email: [Your Email]</li>
</ul>
