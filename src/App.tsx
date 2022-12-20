import React from "react";

import { Refine } from "@pankod/refine-core";
import {
  notificationProvider,
  ChakraProvider,
  refineTheme,
  ReadyPage,
  ErrorComponent,
  Layout,
} from "@pankod/refine-chakra-ui";

import { DataProvider } from "@pankod/refine-strapi-v4";
import routerProvider from "@pankod/refine-react-router-v6";

import { authProvider, axiosInstance } from "./authProvider";
import { API_URL } from "./constants";
import { LangCreate } from "LangCreate";
import { LangList } from "LangList";
import { LangEdit } from "LangEdit";

function App() {
  return (
    <ChakraProvider theme={refineTheme}>
      <Refine
        dataProvider={DataProvider(
          "https://api.fake-rest.refine.dev",
          axiosInstance
        )}
        // dataProvider={DataProvider(API_URL + `/api`, axiosInstance)}
        notificationProvider={notificationProvider()}
        ReadyPage={ReadyPage}
        catchAll={<ErrorComponent />}
        Layout={Layout}
        routerProvider={routerProvider}
        resources={[
          {
            name: "languages",
            list: LangList,
            create: LangCreate,
            edit: LangEdit,
            canDelete: true,
          },
        ]}
      />
    </ChakraProvider>
  );
}

export default App;
