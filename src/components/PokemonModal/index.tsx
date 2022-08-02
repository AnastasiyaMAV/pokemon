import React, { useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useOnePokemonData from '../../hooks/useOnePokemonData';
import { ENDPOINT_ENUM } from '../../types/dataEnum';
import Modal from '../Modal';
import PokemonBigCard from '../PokemonBigCard';

const PokemonModal = () => {
  const { pokemonId } = useParams();

  const { data } = useOnePokemonData(ENDPOINT_ENUM.getOnePokemon, pokemonId);

  const mas: any[] = [];
  data?.types.map((item: any) => {
    return mas.push(item.type.name);
  });

  const navigate = useNavigate();

  const handleClose = useCallback(() => {
    navigate('../');
  }, [navigate]);

  return (
    <Modal onClose={handleClose}>
      {data && (
        <PokemonBigCard
          name={data.name}
          height={data.height}
          weight={data.weight}
          experience={data.base_experience}
          types={mas}
          abilities={['rr']}
          img={data.sprites.other.dream_world.front_default}
          cardColor={mas[0]}
        />
      )}
    </Modal>
  );
};

export default PokemonModal;
