# WebGi Example for using ScrollCameraViewPlugin

An example for a react project with webgi engine using ScrollableCameraViewsPlugin.

About webgi: [https://webgi.xyz/](https://webgi.xyz/)

live website : https://realvw-react-demo-webgi-scroll.vercel.app/

## Structure

The app starts from ./src/App.js

you can find all the Webgi related code in ./src/WebGi.js

## Running

First install the dependencies:

```bash
npm install
```

To run the project in development mode:

```bash
npm start
```

Then navigate to [http://localhost:1234/index.html](http://localhost:1234/index.html) in a web browser to see the default scene in a viewer.

The assets are stored in the `assets` directory.

To build the project for production:

```bash
npm run build
```

## Updates

Check the [webgi manual](https://webgi.xyz/docs/manual/#sdk-links) for the latest version.
To use the different version:

- Update the version number in `package.json` file for both `webgi` and `@types/webgi`.
- Run `npm install` to update the dependencies.
- Run `npm start` or `npm run build` to run or build the project.

## Documentation

For the latest version and documentation: [WebGi Docs](https://webgi.xyz/docs/).

## License

For license and terms of use, see the [SDK License](https://webgi.xyz/docs/license).
