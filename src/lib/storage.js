
const SESSIONS_KEY = "survey_sessions";

function getAllSessions() {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(localStorage.getItem(SESSIONS_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveSessions(sessions) {
  localStorage.setItem(SESSIONS_KEY, JSON.stringify(sessions));
}

export function createSession(sessionId) {
  const sessions = getAllSessions();
  sessions[sessionId] = {
    sessionId,
    startedAt: new Date().toISOString(),
    status: "IN_PROGRESS",
    answers: {},
  };
  saveSessions(sessions);
  return sessions[sessionId];
}

export function saveAnswer(sessionId, questionId, answer) {
  const sessions = getAllSessions();
  if (!sessions[sessionId]) return;
  sessions[sessionId].answers[questionId] = {
    questionId,
    answer,
    answeredAt: new Date().toISOString(),
  };
  saveSessions(sessions);
}

export function completeSession(sessionId) {
  const sessions = getAllSessions();
  if (!sessions[sessionId]) return;
  sessions[sessionId].status = "COMPLETED";
  sessions[sessionId].completedAt = new Date().toISOString();
  saveSessions(sessions);
}

export function getSession(sessionId) {
  const sessions = getAllSessions();
  return sessions[sessionId] || null;
}