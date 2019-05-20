# BusinessINCsoftware
This is the repository for the NNHS Business INC Software Engineering Project

Our project was creating a mobile app for one of the Business INCubator teams at North. Their business is called Style360 that is a personalized clothing swap service. While they already have a website where users can create or log into their accounts and initiate swaps of clothing, they wanted us to make an app that includes similar functions to make the process more convenient for users. Specifically. these functions were signing up/in, viewing the user profile with preferences for clothing style, personal stylist, etc, getting account points by submitting unwanted pieces of clothing, viewing the inventory of clothing that the business warehouse currently carries, and actually initiating a swap from which the user can use account points in exchange for receiving clothing. For this app, we used the programming language React Native because it is compatible for both iOS and Android phones, and used Expo to run the code and phone simulator on the Macs. 

**Platform Requirements:**
- Atom (our code text editor, can install latest version here - https://atom.io)
- MacOS computer for coding
- Xcode (was already on the MacOS computers that we used, but for other computers, search for it and download on the Apple app store - https://developer.apple.com/xcode/)

**Link to Our Project Repository on GitHub:**
https://github.com/NNHSSE201819/BusinessINCsoftware

**Instructions for Configuring and Running Project:**
1. Navigate to project directory through Mac terminal

2. Type the following commands into the terminal:
$ mkdir ~/.npm-global
$ npm config set prefix '~/.npm-global'
$ nano ~/.profile

3. Once the nano .profile file is opened, type in:
export PATH=~/.npm-global/bin:$PATH

4. Save and exit the file by typing:
$ source ~/.profile

5. Then, still in the project directory, type in these commands into the terminal to create a new app program inside of your directory:
$ npm install -g expo-cli
$ expo init my-app
$ cd my-app/

6. Once you navigate to inside the app, always type in this command to run the app:
$ npm start
    - This should open a new page in your web browser titled localhost and says Metro Bundler on it.
    
7. Once the localhost page says Tunnel Ready or a QR code and list of commands shows up in the terminal, you can choose whether to run your app in an Android or iOS simulator.
    - If you want to try out your app on an actual phone, you first need to download the Expo app from the app store on your phone. Then, when you scan the QR code given, your app should open in Expo on your phone. Keep in mind that in order for the app to run on the phone, the computer on which you're running the app and the phone must be on the same wifi/wireless network.
