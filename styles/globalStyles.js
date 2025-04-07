// styles/globalStyles.js

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: "center",
    backgroundColor: "#e0ffba",
  },
  dateAndButton: {
    flexDirection: "row",
    gap: 30,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 5,
    paddingLeft: 10,
    width: "30%",
    height: "100%",
    textAlign: "center",
  },
 
  block: {
    marginTop: 10,
    backgroundColor: "#e0e0e0",
    padding: 10,
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
    justifyContent: "top",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#e0ffba",
  },
  pageTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  pageDate: {
    fontSize: 15,
    marginBottom: 20,
  },
  pageText: {
    fontSize: 16,
    textAlign: "center",
    color: "#333",
  },
});
