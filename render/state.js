const AppState = {
    commands: [],
    filteredCommands: [],
    currentCategory: 'all',
    language: 'en',
};

function setState(key, value) {
    AppState[key] = value;
}