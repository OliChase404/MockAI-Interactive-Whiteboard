This is a proof of concept for an interactive, collaborative whiteboard application with room for AI integration.

This is a Next.js application with a Python, Flask backend. It will use MongoDB for storing user data and room data.

The whiteboarding tools are based on TLDraw, YJS is used to capture and sync changes in real-time between multiple clients.

YJS + websockets also provide a means to pass data to AI models in real-time, which can then be used to provide feedback and/or suggestions to the users.

![multi-user whiteboard](https://i.ibb.co/b1Y88x3/800-PXezgif-1-56504a3332.gif)
Here four clients are connected to the same room and can draw on the whiteboard simultaneously.

To run the application, simply navigate to the client/whiteboard directory, install the dependencies with `npm install`, and run the development server with `npm run dev`.

The backend is not currently required since data persistence is not yet implemented.

Possible Roadmap:
- [x] Basic whiteboarding tools
- [x] Real-time collaboration
- [ ] Data storage
- [ ] AI integration
- [ ] Room management
- [ ] User authentication
- [ ] Analytics
