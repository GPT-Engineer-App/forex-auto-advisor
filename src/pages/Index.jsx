import { Container, Text, VStack, Box, Heading, IconButton, HStack } from "@chakra-ui/react";
import { FaChartLine, FaInfoCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.lg" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Forex Trading Strategies and Indicators
        </Heading>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
          <HStack justifyContent="space-between">
            <Heading as="h2" size="md">
              Candlestick Patterns
            </Heading>
            <IconButton aria-label="Info" icon={<FaInfoCircle />} size="sm" />
          </HStack>
          <Text mt={4}>Candlestick patterns are used to predict the future direction of price movement based on past patterns. Common patterns include Doji, Hammer, and Engulfing.</Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
          <HStack justifyContent="space-between">
            <Heading as="h2" size="md">
              MACD (Moving Average Convergence Divergence)
            </Heading>
            <IconButton aria-label="Info" icon={<FaInfoCircle />} size="sm" />
          </HStack>
          <Text mt={4}>MACD is a trend-following momentum indicator that shows the relationship between two moving averages of a security’s price. It consists of the MACD line, signal line, and histogram.</Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
          <HStack justifyContent="space-between">
            <Heading as="h2" size="md">
              RSI (Relative Strength Index)
            </Heading>
            <IconButton aria-label="Info" icon={<FaInfoCircle />} size="sm" />
          </HStack>
          <Text mt={4}>RSI is a momentum oscillator that measures the speed and change of price movements. It ranges from 0 to 100 and is typically used to identify overbought or oversold conditions.</Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
          <HStack justifyContent="space-between">
            <Heading as="h2" size="md">
              Bollinger Bands
            </Heading>
            <IconButton aria-label="Info" icon={<FaInfoCircle />} size="sm" />
          </HStack>
          <Text mt={4}>Bollinger Bands consist of a middle band (a simple moving average) and two outer bands (standard deviations away from the middle band). They are used to identify overbought or oversold conditions.</Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
          <HStack justifyContent="space-between">
            <Heading as="h2" size="md">
              Moving Averages
            </Heading>
            <IconButton aria-label="Info" icon={<FaInfoCircle />} size="sm" />
          </HStack>
          <Text mt={4}>Moving averages smooth out price data to identify the direction of the trend. Common types include Simple Moving Average (SMA) and Exponential Moving Average (EMA).</Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" width="100%">
          <HStack justifyContent="space-between">
            <Heading as="h2" size="md">
              Pivot Points
            </Heading>
            <IconButton aria-label="Info" icon={<FaInfoCircle />} size="sm" />
          </HStack>
          <Text mt={4}>Pivot points are used to identify potential support and resistance levels. They are calculated based on the high, low, and closing prices of previous trading sessions.</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
