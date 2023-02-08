# ArtificialNeuralNetworks-Python-React
## MARMARA UNIVERSITY FACULTY OF TECHNOLOGY

### DEPARTMENT OF COMPUTER ENGINEERING ARTIFICIAL NEURAL NETWORKS COURSE PROJECT REPORT

 <h4>Project Name:<h4>Detection of Cigarettes in Restricted Areas
Motivation

<p>Thanks to this project, especially in cases such as detecting possible accidents that may occur in environments where explosive or flammable materials are present, keeping the possibility of immediate intervention in our hands or determining the cause of these accidents; At the same time, since smoking is prohibited in and around certain areas in the society due to the harm caused to the environment by smokers, it will be developed in order to more easily identify those who do not comply with these rules. When the causes of fires in the last 10 years were investigated, it was concluded that 40% of them were related to smoking. In this context, we will also prevent possible fires by minimizing the risk factor.</p>


<h4>Possible Use Cases </h4>
<p>For natural gas, fuel filling plants, some factories that has flammable materials like cotton etc. which have the highest fire risk and do not tolerate errors; At the same time, in order to protect the health of the community, the project will be used to process the necessary sanctions in case of smoking in places where smoking is prohibited in common areas such as schools, hospitals, university campuses, banks, official institutions.</p>
<hr>

<h4>Similar Works</h4>
<h5>* Fire Detection</h5>
<p>
https://towardsdatascience.com/early-fire-detection-system-using-deep-learning-and-opencv-6cb60260d54a
The concept of flame detection in indoor and outdoor environments using InceptionV3 and CNN architectures is described at the link above. With the adaptation of two different CNN models, it is aimed to solve the problem with security cameras in inventory, without requiring extra hardware.</p>

<h5>* Fire and Smoke Detection</h5>
<p>
https://pyimagesearch.com/2019/11/18/fire-and-smoke-detection-with-keras-and-deep-learning/
In the study at the link above, a data set was created with fire images collected from Google Images and it was shown that forest fires could be detected by taking the data from here. Later in the study, it was also mentioned how these techniques could be integrated into the home environment. Finally, it is mentioned that there are some false positives as a result of the method and what kind of ways can be followed to eliminate them.
As we look at the past works, most of the work was done for fire detection. We are aiming for places where when fire detection is triggered it is already too late to stop fire.</p>
<hr>


<h4>Pitch Elevator</h4>
<p>It is an essential project to purchase, especially for sectors where there is no luxury to make mistakes and where the investment can disappear with a small spark. Since the project will work on the already installed camera systems, the cost will be lower for the buyer.</p>

<h4>Dataset Preparation</h4>
<p>Dataset "Smoke Object Detection" will be used from the Roboflow.com page. In addition to these, photos of cigarettes taken by the project members will be used. At the same time, synthetic data will be produced with the pictures used.</p>
<hr>


<h3>Project Phases</h3>
<p>Project is divided into separate parts to allow multiple team members to work at the same time. Down below we are explaining what we do in separate parts in our project.</p>

<h4>Model Training</h4>
<p>In the training phase, the YOLOv7 model, which is a pre-trained model using the transfer learning method, will be used. The YOLOv7 model, which is already trained, will be trained once again with the data set we have created. In this way, the model will also be able to detect the objects in the data set we have provided to model.
Once the model is trained, it will be made available to users as a service on the Internet. In this part, an image will be uploaded on the frontend side of the project, communication will be ensured with the API to be created on the backend side and the trained model will be output. The resulting output will provide feedback to users.</p>

<h4>Backend Development</h4>
<p>In our backend implementation, we utilize FastAPI to expose our model to the frontend and FirebaseAuth for authenticating users. We obtain the Firebase ID token from users via the Bearer method, then validate the token's signature using the Firebase Admin API. To execute our AI model, we employ ONNX Runtime. We receive an uploaded image as a base64 string and process it through ONNX Runtime. We subsequently render the image using the Pillow library and return it in a base64 format. Although utilizing base64 for transferring objects may not be the most optimal solution in terms of performance, it simplifies the process and eliminates the need for storing the image elsewhere.</p>

<h4>Frontend Development</h4>
<p>The model we trained is provided with the web interface for all users to try. With the Firebase infrastructure, the user registration feature is used in the system. React library is used for frontend. Users will upload photos and they are sent to the model via the backend. Instant notification messages were shown to users with react-toastify. User experience has been enhanced.</p>

<h4>Deployment</h4>
<p>We deployed our website utilizing both Cloudflare Pages and GitHub Pages. These technologies offer a significant advantage over self-hosted environments, such as containerized Dockers, as they allow for automatic code building via triggers like GitHub Actions with minimal effort. However, for the sake of experimentation, we also deployed our site in both ways. 
<p>You can access our application through the following links: <br>
You can reach the demo at https://ysa-frontend-react.pages.dev/ <br>
api address: api.marun.tk <br>
frontend address (cloudflare pages): yolo.marun.tk <br>
frontend address (docker): https://demo.marun.tk <br>
web3 gateway (going extramile): https://web3.marun.tk <br>
Why not try our Short-link Service :D : https://link.aestech.me/web3<br>
IPFS native address: ipfs://QmcTnLhToZmNFpEjiDYzgQXaCMfyB6cHjQsJ6eDLXvwJGi  <br>
CF-IPNS https://cf-ipfs.com/ipfs/QmcTnLhToZmNFpEjiDYzgQXaCMfyB6cHjQsJ6eDLXvwJGi </p>
TOR: http://marunsfiznwpoqc435ce2ixhc2st6rbbrbubwa3trcdpuztibhhq3fyd.onion
</p>
<hr>
<h4>Infrastructure</h4>
<p>Thanks to Oracle Cloud Infrastructure Free Tier we can host our services 7/24 on a cloud with little configuration. In order to serve our containers without hassling port forwardings, we decided to go-ahead with a reverse proxy approach. We used OpenResty with a custom frontend and Traefik for SSL terminations.</p>

<h4>Security</h4>
<p>Having deployed our application, it became imperative to safeguard our efforts from individuals with nefarious intentions. To achieve this, we transferred our DNS to Cloudflare and employed their complimentary proxy service. Additionally, we encountered a header conundrum which was resolved through the utilization of a middleware. Cloudflare Workers, a state-of-the-art serverless alternative, furnished us with a proxy service and enabled us to seamlessly serve our content.</p>
<hr>

<h3>Project Images</h3>
<h4>Register Page</h4>
<img width="1822" alt="Screenshot 2023-01-24 at 23 21 33" src="https://user-images.githubusercontent.com/77414773/214400132-f5525569-33d0-4e49-85ec-2b04ab76e818.png">
<h4>Login Page</h4>
<img width="1822" alt="Screenshot 2023-01-24 at 23 21 56" src="https://user-images.githubusercontent.com/77414773/214400196-2d8fd9e9-398f-434a-8e62-2c81abf81d60.png">
<h4>Model Page</h4>
<img width="1822" alt="Screenshot 2023-01-24 at 23 24 52" src="https://user-images.githubusercontent.com/77414773/214400759-595e6ba7-dc81-445f-8d2d-503cabd2df93.png">
<img width="1822" alt="Screenshot 2023-01-24 at 23 29 21" src="https://user-images.githubusercontent.com/77414773/214401807-f0e717bd-1946-4938-9b6c-39658a875085.png">
<h4>Contacts Page</h4>
<img width="1822" alt="Screenshot 2023-01-24 at 23 25 30" src="https://user-images.githubusercontent.com/77414773/214400865-8316f100-ca06-45a3-af1b-167ce228588f.png">

<h4>If you want to review the project, the project requirements:</h4>
* Python </br>
* Nodejs

  ```
  npm install
  npm start
  ```
