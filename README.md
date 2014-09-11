apigee-api-workshop
===================

## Workshop Steps

1. Install Apigee 127 Globally

  ```bash
  $ npm install -g apigee-127`
  ```

2. Create the project with Apigee 127

  ```bash
  $ a127 project create apigee-api-coders-workshop
  ```

3. Download the files to install Usergrid

  ```bash
  $ a127 usergrid download
  ```

4. Start Usergrid

  ```bash
  $ a127 usergrid start
  ```
  
5. Open Usergrid page

  ```bash
  $ a127 usergrid portal
  ```
  
6. Login with user `superuser` and password `superuser`
7. In the web interface, create an organization called `workshop`
8. Select the organization on the drop box and create an application named `sandbox` for that organization
9. Go to `ROLES->Guest` and click on `Add Permission`
10. On `Path` write `/**`, select all checkboxes and click on Add
11. Unzip the file `demoData.zip` and in a terminal go inside it
12. Run the following command to insert data to the database:

  ```bash
  $ node install.js
  ```
  
13. On the terminal, go to the project folder and run:

  ```bash
  $ node app.js
  ```

You should see the API on the following URL:

    http://localhost:10010/

## Run the full project

Greg Rewis, the workshop teacher, gave us a link to download the full project.

The main difference is that in the full project a graphical interface is implemented.

To run it do the following:

1. Unzip `api-workshop.zip` file.
2. Do steps 3 to 13 of `Workshop steps`
3. In a terminal, navigate to the folder.
4. Run the following command:

  ```bash
  $ node app.js
  ```

You should see the app on the following URL:

    http://localhost:10010/

## Tools

- Edit the swagger file with:
  ```bash
  $ a127 project edit
  ```
  - Swagger Editor: http://localhost:62463/

