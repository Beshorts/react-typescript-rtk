import React, { Suspense } from 'react';
import { Wrapper } from "./index.styles";
import { useGetLocalData } from '../../utils/hooks';
import { categories, CategoryItemProps } from '../../API/localData';
import CategoryItem from "./Category";


const Categories = () => {

  const { response, error, loading } = useGetLocalData<CategoryItemProps[]>(categories)

  return (
    <Wrapper>
      {/* LOADING AND ERROR HAVE TO BE IMPLEMENTED AS COMPONENT*/}
      {loading ? (
        <p>loading slider...</p>
      ) : (
        <>
          {error && (
            <>
              <p>OOPS SOMETHING WENT WRONG! PLEASE RELOAD PAGE...</p>
            </>
          )}
          <>
            <Suspense
              fallback={
                <div>Loading SLides...</div>
              }
            >
              {response && response.map((item) => (
                <CategoryItem item={item} key={item.id}  />
              ))}
            </Suspense>
          </>
        </>
      )}
    </Wrapper>
  )
};

export default Categories;