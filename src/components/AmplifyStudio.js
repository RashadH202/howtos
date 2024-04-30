function AmplifyStudio() {
  return (
       <div className="guide">
      <h1>Amplify Stuido WorkFlow</h1>
      <p>This is a guide to help process my workflow for when creating app using Amplify Stuido</p>

      {/* Section 1 */}
      <section className="guide-section">
        <h2>Setting Up Amplify Permissions</h2>
        <p> In order to work with amplify you should make sure to install all the dependecies first, although you can install on an already created react app if needed</p>
        <ul>
        <li>Step - 1 | run this command inside the folder you plan to use amplify in. npm install aws-amplify @aws-amplify/ui-react. This will install amplify and its ui for you to use.</li>
        <li>Step - 2 | It's going to ask you to sign into your AWS profile, make sure you use your admin profile not your root if you can avoid it.</li>
        <li>Step - 3 | In the terminal it's going to ask you to press enter, then take you back to your browser(you can do all this in the cli but its more user friendly to just do it in the browswer). Make sure you give the user admin right so they can make changes and addtions to the application</li>
        <li>Step - 4 | in the aws console, create your keys, give it cli permissions so that it'll be ready to work with no restrictions. Once you have this return to your console they will ask you again to press enter, and then for your keys enter them. Once that's done you've set amplify to be used in your project.</li>
        <li>Step - 5 | </li>


        </ul>
        
      </section>

      {/* Section 2 */}
      <section className="guide-section">
        <h2>Section 2 Title</h2>
        <p>Description or instructions for section 2.</p>
      </section>

      {/* Section 3 */}
      <section className="guide-section">
        <h2>Section 3 Title</h2>
        <p>Description or instructions for section 3.</p>
      </section>

      {/* Add more sections as needed */}
    </div>
  );
}

export default AmplifyStudio;
