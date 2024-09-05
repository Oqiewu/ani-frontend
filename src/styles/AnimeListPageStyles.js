import styled from '@emotion/styled';

export const CenteredPaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 16px 0;
`;

export const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
`;

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-top: 10px;
`;

export const Title = styled.h1`
    font-size: 2rem;
    font-weight: 500;
    color: #3b3b3b;
    cursor: pointer;
    margin: 0;
    flex-shrink: 0;
    transition: color 0.3s ease, transform 0.3s ease;

    &:hover {
        color: #1c90f3;
        transform: scale(1.05);
    }
`;

export const SortContainer = styled.div`
    flex-shrink: 0;
    margin-left: 16px;
`;

export const SearchContainer = styled.div`
    flex-grow: 1; /* Контейнер поиска растягивается на все доступное пространство */
    align-items: center;
    margin: 0 16px; /* Добавить отступы, если нужно */
`;

export const Divider = styled.div`
    width: 100%;
    height: 1px;
    background-color: #e0e0e0;
    margin: 20px 0;
`;

export const Description = styled.p`
    font-size: 1rem;
    color: #666;
    margin: 10px 0;
    line-height: 1.5;
    max-width: 800px;
`;

export const ContentContainer = styled.div`
    display: flex;
    margin-top: 20px;
`;

export const AnimeListContainer = styled.div`
    flex: 1;
`;

export const Sidebar = styled.div`
    width: 300px; /* Adjust as needed */
    margin-left: 20px; /* Add margin if needed */
`;
