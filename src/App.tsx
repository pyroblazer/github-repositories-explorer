//src/App.tsx
import { FormEvent, useEffect, useState } from "react";
import "./App.css";
import Accordion from "./components/Accordion";
import RepositoryItem from "./components/RepositoryItem";
import SearchForm from "./components/SearchForm";
import { Repository } from "./interface/repository.interface";
import { User, UserWithRepository } from "./interface/user.interface";
import { UserResponse } from "./interface/userResponse.interface";

function App() {
  const [query, setQuery] = useState<string>("");
  const [userData, setUserData] = useState<UserWithRepository[] | undefined>();
  const [showData, setShowData] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setShowData(false);
  }, [query]);

  const search = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fetchUserRepositories = async (repos_url: string) => {
      const response = await fetch(repos_url);
      const repositories: Repository[] = await response.json();
      return repositories;
    };

    setShowData(false);
    if (query.length === 0) return;
    setLoading(true);
    try {
      const userResponse = await fetch(
        `https://api.github.com/search/users?q=${query}&per_page=5`
      );
      const userData: UserResponse = await userResponse.json();

      const promise = userData.items?.map(async (user: User) => {
        const repositories = await fetchUserRepositories(user.repos_url);
        return {
          ...user,
          repositories,
        } as UserWithRepository;
      });
      if (promise) {
        const userWithRepositories = await Promise.all(promise);
        setUserData(userWithRepositories);
      }
      setShowData(true);
    } catch (e) {
      alert(e);
    }
    setLoading(false);
  };

  return (
    <div>
      <SearchForm query={query} setQuery={setQuery} onSearch={search} />
      <div className="py-2 px-4">
        {loading ? "Loading..." : ""}
        {showData ? (
          <>
            <p>Showing results for "{query}"</p>
            {userData?.map((user) => {
              return (
                <Accordion key={user.id} title={user.login}>
                  {Array.isArray(user.repositories)
                    ? user.repositories.map((repo) => (
                        <RepositoryItem
                          key={repo.id}
                          name={repo.name}
                          star={repo.stargazers_count}
                          description={repo.description}
                        />
                      ))
                    : "An error occured"}
                </Accordion>
              );
            })}
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
