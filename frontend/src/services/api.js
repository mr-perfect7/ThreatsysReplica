const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
// const  BASE_URL = `http://localhost:5000/api/`
export const getHome = async () => {
  const res = await fetch(`${BASE_URL}/home`, { cache: "no-store" });
  return res.json();
};

export const getAbout = async () => {
  const res = await fetch(`${BASE_URL}/about`, { cache: "no-store" });
  return res.json();
};

export const getCoreValues = async () => {
  const res = await fetch(`${BASE_URL}/core-values`, { cache: "no-store" });
  return res.json();
};

export const getIndustries = async () => {
  const res = await fetch(`${BASE_URL}/industries`, { cache: "no-store" });
  return res.json();
};

export const submitContact = async (data) => {
  const res = await fetch(`${BASE_URL}/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const getProjects = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/projects`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  return res.json();
};
