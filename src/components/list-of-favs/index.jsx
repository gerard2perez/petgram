/*
Gerardo Pérez Pérez
<gerard2perez@outlook.com>
Learning Resource from platzi

File: index.jsx
Created:  2022-05-25T16:43:09.329Z
Modified: 2022-05-26T14:28:11.641Z
*/
import PropTypes from 'prop-types'
import { autoGentIdArray } from '../../utils/auto-gen-id-array'
import { SkeletonFavorite } from '../skeleton-favorite/styles'
import { Toaster } from '../toaster'
import { Grid, Image, Link } from './styles'
export const ListOfFavorites = ({ favs = [], loading, error }) => {
  if (loading) {
    favs = autoGentIdArray(favs.length)
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

ListOfFavorites.propTypes = {
  favs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    })
  )
}
