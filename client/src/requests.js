const BASE_URL = `http://localhost:3000/api/v1`;

export const Session = {
  create(params) {
    return fetch(`${BASE_URL}/session`, {
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(params)
    }).then((res) => {
      return res.json();
    })
  },
  destroy(){
    return fetch(`${BASE_URL}/session`, {
      method: 'DELETE',
      credentials: 'include'
    })
  }
}

export const User = {
  current() {
    return fetch(`${BASE_URL}/users/current`, {
      credentials: 'include',
    }).then(res => res.json())
  },
  create(params) {
    return fetch(`${BASE_URL}/users`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: params })
    }).then(res => res.json())
  }
}

export const Course = {
  index() {
    return fetch(`${BASE_URL}/courses`, {
      headers: {
        "Cache-Control": "no-cache",
      },
    }).then((res) => {

      return res.json();
    });
  }, 
  indexByUser(id) {
    return fetch(`${BASE_URL}/users/${id}/courses`, {
      headers: {
        "Cache-Control": "no-cache",
      },
    }).then((res) => {
      return res.json();
    });
  },
  enroll(id) {
    return fetch(`${BASE_URL}/courses/${id}/enrollments`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({status: 'pending'}),
    })
      .then((res) => res.json())
      .catch(console.error);
  },
  show(id) {
    return fetch(`${BASE_URL}/courses/${id}`)
      .then((res) => res.json())
      .catch(console.error);
  },
  create(params) {
    return fetch(`${BASE_URL}/courses`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then((res) => res.json())
      .catch(console.error);
  },
  delete(id) {
    return fetch(`${BASE_URL}/courses/${id}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch(console.error);
  },
  update(id, params) {
    return fetch(`${BASE_URL}/courses/${id}`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then((res) => res.json())
      .catch(console.error);
  },
}

export const Enrollment = {
  index() {
    return fetch(`${BASE_URL}/enrollments`, {
      method: "GET", 
      headers: {
        "Cache-Control": "no-cache",
      },
    }).then(res => res.json())
  },
  delete(id) {
    return fetch(`${BASE_URL}/enrollments/${id}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json())
  },
  update(id, params) {
    return fetch(`${BASE_URL}/enrollments/${id}`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then((res) => res.json())
      .catch(console.error);
  }
}

export const Reservation = {
  index() {
    return fetch(`${BASE_URL}/reservations`, {
      method: "GET", 
      headers: {
        "Cache-Control": "no-cache",
      },
    }).then(res => res.json())
  },
  indexByUser(id) {
    return fetch(`${BASE_URL}/users/${id}/reservations`, {
      headers: {
        "Cache-Control": "no-cache",
      },
    }).then((res) => {
      return res.json();
    });
  },
  update(id, params) {
    return fetch(`${BASE_URL}/reservations/${id}`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then((res) => res.json())
      .catch(console.error);
  },
  delete(id) {
    return fetch(`${BASE_URL}/reservations/${id}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json())
  },
}

export const Facility = {
  index() {
    return fetch(`${BASE_URL}/facilities`, {
      method: "GET", 
      headers: {
        "Cache-Control": "no-cache",
      },
    }).then(res => res.json())
  },
  show(id) {
    return fetch(`${BASE_URL}/facilities/${id}`, {
      method: "GET", 
      headers: {
        "Cache-Control": "no-cache",
      },
    }).then(res => res.json())
  }
}