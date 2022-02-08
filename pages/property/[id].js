import { Flex, Box, Text, Icon, spacer, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";

import { filterData, getFilterValues } from "../../utils/filterData";
import { baseUrl, fetchApi } from "../../utils/fetchApi";
import ImageScrollbar from "../../Component/ImageScrollbar/ImageScrollbar";

const PropertyDetails = ({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  },
}) => (
  <Box maxWidth="1000px" margin="auto" p="4">
    {photos && <ImageScrollbar data={photos} />}
    <Box w="full" p="6">
      <Flex paddingTop="2" alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <Box scrollPaddingRight="3" color="green.400">
            {isVerified && <GoVerified />}
          </Box>
          <Text fontWeight="bold" fontSize="lg">
            Price {millify(price)}
            {rentFrequency && `/ ${rentFrequency}`}
          </Text>
        </Flex>
        <Box>
          <Avatar size="sm" src={agency?.logo?.url}></Avatar>
        </Box>
      </Flex>
      <Flex
        alignItems="center"
        p="1"
        justifyContent="space-between"
        w="250px"
        color="blue.400"
      >
        {rooms}
        <FaBed /> {baths} <FaBath /> {millify(area)} sqft <BsGridFill />
      </Flex>
      <Box marginTop="2">
        <Text fontSize="lg" fontWeight="bold" marginTop="2">
          {title}
        </Text>
        <Text lineHeight="2" color="gray.600">
          {description}
        </Text>
      </Box>
      <Flex flexWrap="wrap" textTransform="uppercase" justifyContent="center">
        <Flex
          justifyContent="space-between"
          w="400px"
          borderBottom="1px"
          borderColor="gray.100"
          p="3"
        >
          <Text>Type</Text>
          <Text fontWeight="bold">{type}</Text>
        </Flex>
        <Flex
          justifyContent="space-between"
          w="400px"
          borderBottom="1px"
          borderColor="gray.100"
          p="3"
        >
          <Text>Purpose</Text>
          <Text fontWeight="bold">{purpose}</Text>
        </Flex>
        {furnishingStatus && (
          <Flex
          justifyContent="space-between"
          w="400px"
          borderBottom="1px"
          borderColor="gray.100"
          p="3"
        >
          <Text>FurnishingStatus</Text>
          <Text fontWeight="bold">{furnishingStatus}</Text>
        </Flex>
        )}
      </Flex>
      <Box>
        {amenities.length && <Text fontWeight="black" fontSize="2xl" marginTop="5">Aminities</Text>}
        <Flex flexWrap="wrap">
          {amenities.map( (item) =>(
            item.amenities.map((amintie) => (
              <Text key={amintie.text} fontWeight="bold" fontSize="l" p="2" m="1" color="blue.400" p="2" bg="gray.200" borderRadius="5">{amintie.text}</Text>
            ))
          ))}
        </Flex>
      </Box>
    </Box>
  </Box>
);

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);
  return {
    props: {
      propertyDetails: data,
    },
  };
}
