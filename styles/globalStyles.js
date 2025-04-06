// styles/globalStyles.js

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    width: "80%",
    textAlign: "center",
  },
  block: {
    marginTop: 20,
    backgroundColor: "#e0e0e0",
    padding: 15,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
  },
  blockText: {
    fontSize: 18,
  },
  error: {
    color: "red",
    marginTop: 10,
  },
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  pageDate: {
    fontSize: 20,
    marginBottom: 20,
  },
  pageText: {
    fontSize: 16,
    textAlign: "center",
    color: "#333",
  },
});
