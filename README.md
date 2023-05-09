# React-Router-In-Depth 

React Router enables "client side routing".
In traditional websites, the browser requests a document from a web server, downloads and evaluates CSS and JavaScript assets, and renders the HTML sent from the server. When the user clicks a link, it starts the process all over again for a new page.

Client side routing allows your app to update the URL from a link click without making another request for another document from the server. Instead, your app can immediately render some new UI and make data requests with fetch to update the page with new information.

This enables faster user experiences because the browser doesn't need to request an entirely new document or re-evaluate CSS and JavaScript assets for the next page. It also enables more dynamic user experiences with things like animation.

### Client side routing is enabled by creating a Router and linking/submitting to pages with Link and <Form>:

```javascript
    import React from "react";
    import { createRoot } from "react-dom/client";
    import {
      createBrowserRouter,
      RouterProvider,
      Route,
      Link,
    } from "react-router-dom";

    const router = createBrowserRouter([
      {
        path: "/",
        element: (
          <div>
            <h1>Hello World</h1>
            <Link to="about">About Us</Link>
          </div>
        ),
      },
      {
        path: "about",
        element: <div>About</div>,
      },
    ]);

    createRoot(document.getElementById("root")).render(
      <RouterProvider router={router} />
    );
    ```
  ### NESTED ROUTES
  React Router embraces this convention with APIs for creating nested layouts coupled to URL segments and data.
  ```javascript
    createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<Root />}>
          <Route path="contact" element={<Contact />} />
          <Route
            path="dashboard"
            element={<Dashboard />}
            loader={({ request }) =>
              fetch("/api/dashboard.json", {
                signal: request.signal,
              })
            }
          />
          <Route element={<AuthLayout />}>
            <Route
              path="login"
              element={<Login />}
              loader={redirectIfUser}
            />
            <Route path="logout" />
          </Route>
        </Route>
      )
    );

    // Or use plain objects
    createBrowserRouter([
      {
        path: "/",
        element: <Root />,
        children: [
          {
            path: "contact",
            element: <Contact />,
          },
          {
            path: "dashboard",
            element: <Dashboard />,
            loader: ({ request }) =>
              fetch("/api/dashboard.json", {
                signal: request.signal,
              }),
          },
          {
            element: <AuthLayout />,
            children: [
              {
                path: "login",
                element: <Login />,
                loader: redirectIfUser,
              },
              {
                path: "logout",
                action: logoutUser,
              },
            ],
          },
        ],
      },
    ]);
  ```
