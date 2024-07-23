JWT has been used to establish user authentication for the website. User can create their profile and login to the website to store and manage their recipes (name, description, ingredients, process etc).

Backend: REST API endpoints have been created using Django REST Framework to register a user, generate a JWT token, refresh a JWT token, get the list of recipes for the current user, create a new recipe against the logged in user and delete a recipe. 

Frontend: Vite has been used for React project template and Axios for creating an HTTP client to invoke the REST endpoints.

Website has also been deployed and tested in AWS using the following architecture:
* Created a custom VPC with 2 public subnets in two different availability zones and a private subnet.
* Created an EC2 Ubuntu instance in the private subnet to host the backend code and prevent public access.
* Created an EC2 Ubuntu instance in one of the public subnets to SSH into the private EC2 instance.
* Created an Internet Gateway for giving VPC internet access.
* Created a NAT Gateway for communication with the private subnet by allocating an Elastic IP Address.
* Created a private Route Table associated with the private subnet and a route added for NAT Gateway.
* Created a public Route Table associated with the public subnets and a route added for Internet Gateway.
* Created a Target Group with the private EC2 instance registered as a target and a Security Group to allow inbound HTTP traffic at port 80.
* Created an Application Load Balancer mapped to the two public subnets with the Target Group and Security Group created in the previous step.
* Created an S3 bucket with the frontend build code (the contents inside dist folder after "npm run build" command) and enabled static website hosting
* Created a CloudFront distribution for the S3 for CDN. User will be hitting the CloudFront URL.

  <img width="977" alt="Architecture" src="https://github.com/user-attachments/assets/abd4606c-fd07-490b-afbc-299f886da868">


  



