/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: index.jsx
Created:  2022-05-25T16:43:09.329Z
Modified: 2022-05-25T20:17:54.730Z
*/
import { SkeletonFavorite } from '../skeleton-favorite/styles'
import { Toaster } from '../toaster'
import { Grid, Image, Link } from './styles'
const autoInc = ((i = 0) => () => ({ id: ++i }))()
export const ListOfFavorites = ({ favs = [], loading, error }) => {
  if (loading) {
    favs = Array(favs.length || 9).fill().map(autoInc)
  }
  return <>
    <Grid>
    {favs.map(favorite => (
      loading
        ? <SkeletonFavorite key={favorite.id}/>
        : <Link key={favorite.id} to={`/pet/${favorite.id}`}>
        <Image src={favorite.src} />
      </Link>
    )
    )}
    </Grid>
    {error && <Toaster message={error.message}/>}
  </>
}
