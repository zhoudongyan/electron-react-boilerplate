const App: React.FC = (msg: string) => {
    return (
        <div className="flex flex-col items-center justify-center h-screen p-4 m-4">
            <h2 className="text-2xl font-bold">Hello World</h2>
            <p>Welcome to the {msg}.</p>
        </div>
    );
};

export default App;
