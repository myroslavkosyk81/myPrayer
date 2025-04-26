// styles/globalStyles.js

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    alignItems: "center",
    backgroundColor: "#e0ffba",
  },
  dateAndButton: {
    flexDirection: "row",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    top: 20,
    gap: 30,
    height: 40,
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
  inputPsalm: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 5,
    paddingLeft: 10,
    width: "40%",
    height: "100%",
    textAlign: "center",
  },
 
  block: {
    top: 20,
    marginTop: 10,
    backgroundColor: "#e0e0e0",
    padding: 10,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  image: {
    width: 132,
    height: 200, // 🔼 більша висота
    borderRadius: 8,
    alignSelf: 'center',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  
  
  blockText: {
    fontSize: 18,
  },
  error: {
    color: "red",
    marginTop: 10,
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
    textAlign: "justify",
  },
  paragraph2: {
    fontSize: 16,
    lineHeight: 28,
    fontWeight: "800",
    color: "#333",
    marginBottom: 10,
    textAlign: "justify",
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
  pageTextMenu2: {
    fontSize: 16,
    textAlign: "justify",
    color: "#333",
  },
  pageTextMenuTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: "center",
    color: "#333",
  },
});
