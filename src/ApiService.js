/* eslint-disable no-unused-vars */
export default class ApiService {
  _basePath = "http://test-tasks.local/";
  _baseApiPath = "http://test-tasks.local/api";

  getResource = async (url) => {
    const sessionId = localStorage.getItem("sessionId");

    const headers = new Headers();
    if (sessionId) {
      headers.append("X-Session-ID", sessionId);
    }
    const res = await fetch(`${this._baseApiPath}${url}`, {
      headers: headers,
    });
    if (!res.ok) {
      return { status: res.status };
    }
    const result = await res.json();
    return { status: res.status, result };
  };
  getAllBooks = async () => {
    const res = await this.getResource("/books/");
    return res;
  };
  getBook = async (id) => {
    const res = await this.getResource(`/books/${id}`);
    return res;
  };
  auth = async (data) => {
    let formData = new FormData();
    formData.append("username", data.username);
    formData.append("password", data.password);
    const res = await fetch(`${this._basePath}login`, {
      mode: "cors",
      method: "POST",
      body: formData,
    });
    if (!res.ok) {
      return res;
    }
    const sessionId = res.headers.get(`X-Session-ID`);
    localStorage.setItem("sessionId", sessionId);
    return res;
  };
  logOut = async () => {
    const sessionId = localStorage.getItem("sessionId");
    const headers = new Headers();
    if (sessionId) {
      headers.append("X-Session-ID", sessionId);
    }
    const res = await fetch(`${this._basePath}logout`, {
      headers: headers,
    });
    if (res.ok) {
      localStorage.removeItem("sessionId");
    }
    return res;
  };
}
