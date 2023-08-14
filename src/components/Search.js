import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { useTranslation } from "react-i18next";


const GET_DATA_ENTRIES_BY_USER = gql`
  query GetDataEntriesByUser($user: String!) {
    dataEntriesByUser(user: $user) {
      id
      user
      model
      prompt
      result
    }
  }
`;

const GET_DATA_ENTRIES_BY_MODEL = gql`
  query GetDataEntriesByModel($model: String!) {
    dataEntriesByModel(model: $model) {
      id
      user
      model
      prompt
      result
    }
  }
`;

const GET_DATA_ENTRIES_BY_PROMPT = gql`
  query GetDataEntriesByPrompt($prompt: String!) {
    dataEntriesByPrompt(prompt: $prompt) {
      id
      user
      model
      prompt
      result
    }
  }
`;

const GET_DATA_ENTRIES_BY_RESULT = gql`
  query GetDataEntriesByResult($result: String!) {
    dataEntriesByResult(result: $result) {
      id
      user
      model
      prompt
      result
    }
  }
`;

const DataEntriesSearch = () => {
  const { t } = useTranslation();
  const [user, setUser] = useState("");
  const [model, setModel] = useState("");
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  const { loading: loadingUser, data: userData } = useQuery(
    GET_DATA_ENTRIES_BY_USER,
    {
      variables: { user },
    }
  );

  const { loading: loadingModel, data: modelData } = useQuery(
    GET_DATA_ENTRIES_BY_MODEL,
    {
      variables: { model },
    }
  );

  const { loading: loadingPrompt, data: promptData } = useQuery(
    GET_DATA_ENTRIES_BY_PROMPT,
    {
      variables: { prompt },
    }
  );

  const { loading: loadingResult, data: resultData } = useQuery(
    GET_DATA_ENTRIES_BY_RESULT,
    {
      variables: { result },
    },
  );

  const handleUserSearch = (e) => {
    e.preventDefault();
    // Realiza la búsqueda por usuario
  };

  const handleModelSearch = (e) => {
    e.preventDefault();
    // Realiza la búsqueda por modelo
  };

  const handlePromptSearch = (e) => {
    e.preventDefault();
    // Realiza la búsqueda por prompt
  };

  const handleResultSearch = (e) => {
    e.preventDefault();
    // Realiza la búsqueda por result
  };

  return (
    <div style={{ marginTop: "9rem" }}>
      <h3 style={{ color: "black" }}>{t("Search Data Entries")}</h3>

      <form onSubmit={handleUserSearch}>
        <label style={{ color: "black" }}>{t("User")}:</label>
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <button style={{ color: "black" }} type="submit">
          {t("Search by User")}
        </button>
      </form>

      <form onSubmit={handleModelSearch}>
        <label style={{ color: "black" }}>{t("Model")}:</label>
        <select value={model} onChange={(e) => setModel(e.target.value)}>
          <option style={{ color: "black" }} value="">{t("All")}</option>
          <option style={{ color: "black" }} value="Traductor">{t("Traductor")}</option>
          <option style={{ color: "black" }} value="text-davinci-003">{t("text-davinci-003")}</option>
          <option style={{ color: "black" }} value="List">{t("List")}</option>
          <option style={{ color: "black" }} value="Emoji">{t("Emoji")}</option>
          <option style={{ color: "black" }} value="edits">{t("Edits")}</option>
        </select>
        <button style={{ color: "black" }} type="submit">
          {t("Search by Model")}
        </button>
      </form>

      <form onSubmit={handlePromptSearch}>
        <label style={{ color: "black" }}>{t("Prompt")}:</label>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button style={{ color: "black" }} type="submit">
          {t("Search by Prompt")}
        </button>
      </form>

      <form onSubmit={handleResultSearch}>
        <label style={{ color: "black" }}>{t("Result")}:</label>
        <input
          type="text"
          value={result}
          onChange={(e) => setResult(e.target.value)}
        />
        <button style={{ color: "black" }} type="submit">
          {t("Search by Result")}
        </button>
      </form>

      <h4 style={{ color: "black" }}>{t("Results")}:</h4>

      {loadingUser && <p style={{ color: "black" }}>{t("Loading user data...")}</p>}
      {userData &&
        userData.dataEntriesByUser.map((entry) => (
          <div style={{ marginTop: "0.5rem" }} key={entry.id}>
            <p style={{ color: "black" }}>{t("User")}: {entry.user}</p>
            <p style={{ color: "black" }}>{t("Model")}: {entry.model}</p>
            <p style={{ color: "black" }}>{t("Prompt")}: {entry.prompt}</p>
            <p style={{ color: "black" }}>{t("Result")}: {entry.result}</p>
          </div>
        ))}

      {loadingModel && <p style={{ color: "black" }}>{t("Loading model data...")}</p>}
      {modelData &&
        modelData.dataEntriesByModel.map((entry) => (
          <div style={{ marginTop: "0.5rem" }} key={entry.id}>
            <p style={{ color: "black" }}>{t("User")}: {entry.user}</p>
            <p style={{ color: "black" }}>{t("Model")}: {entry.model}</p>
            <p style={{ color: "black" }}>{t("Prompt")}: {entry.prompt}</p>
            <p style={{ color: "black" }}>{t("Result")}: {entry.result}</p>
          </div>
        ))}

      {loadingPrompt && <p style={{ color: "black" }}>{t("Loading prompt data...")}</p>}
      {promptData &&
        promptData.dataEntriesByPrompt.map((entry) => (
          <div style={{ marginTop: "0.5rem" }} key={entry.id}>
            <p style={{ color: "black" }}>{t("User")}: {entry.user}</p>
            <p style={{ color: "black" }}>{t("Model")}: {entry.model}</p>
            <p style={{ color: "black" }}>{t("Prompt")}: {entry.prompt}</p>
            <p style={{ color: "black" }}>{t("Result")}: {entry.result}</p>
          </div>
        ))}

      {loadingResult && <p style={{ color: "black" }}>{t("Loading result data...")}</p>}
      {resultData &&
        resultData.dataEntriesByResult.map((entry) => (
          <div style={{ marginTop: "0.5rem" }} key={entry.id}>
            <p style={{ color: "black" }}>{t("User")}: {entry.user}</p>
            <p style={{ color: "black" }}>{t("Model")}: {entry.model}</p>
            <p style={{ color: "black" }}>{t("Prompt")}: {entry.prompt}</p>
            <p style={{ color: "black" }}>{t("Result")}: {entry.result}</p>
          </div>
        ))}
    </div>
  );
};

export default DataEntriesSearch;
