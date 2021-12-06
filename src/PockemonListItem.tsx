import styled from 'styled-components/native';
import React, {FC} from 'react';
import {TouchableOpacity} from 'react-native';
import {Pockemon} from "./types/types";

type Props = {
    pockemon: Pockemon;
};

export const PockemonListItem: FC<Props> = ({pockemon}) => {
    return (
        <TouchableOpacity onPress={() => {}}>
            <Root>
                <Row>
                    <Image source={{uri: ''}} />
                    <Title numberOfLines={1}>{pockemon.name}</Title>
                </Row>
            </Root>
        </TouchableOpacity>
    );
};

const Root = styled.View`
  height: 100px;
  padding-vertical: 10px;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Image = styled.Image`
  height: 80px;
  width:80px;
  border-radius: 25px;
  margin-horizontal: 16px;
`;

const Title = styled.Text`
  font-weight: bold;
  font-size: 17px;
  line-height: 30px;
`;
