import { useParams, useNavigate, } from "react-router-dom"
import { Link } from "react-router-dom";
import { useEffect  , useState} from "react"
import './detalhes.css'

interface CityProps {
  request: {
    type: string;
    query: string;
    language: string;
    unit: string;
  };
  location: {
    name: string;
    country: string;
    region: string;
    lat: string;
    lon: number;
    timezone_id: string;
    localtime: string;
    localtime_epoch: number;
    utc_offset: string;
  };
  current: {
    observation_time: string;
    temperature: number;
    weather_code: string;
    weather_icons: string[];
    weather_descriptions: string[];
    wind_speed: number;
    wind_degree: number;
    wind_dir: string;
    pressure: number;
    precip: number;
    humidity: number;
    cloudcover: number;
    feelslike: number;
    uv_index: number;
    visibility: number;
    is_day: string; // "yes" ou "no"
    air_quality?: {
      co: number;
      no2: number;
      o3: number;
      so2: number;
      pm2_5: number;
      pm10: number;
      us_epa_index: number;
      gb_defra_index: number;
    };
  };
}


export function Detalhes() {
  const { cidade } = useParams<{ cidade: string }>();
  const [dados, setDados] = useState<CityProps | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getCidade() {
      try {
        const response = await fetch(
          `https://api.weatherstack.com/current?access_key=85052ae1cbbb5d9d2c5c3b159e7c6f87&query=${cidade}`
        );
        const data = await response.json();

      

        setDados(data);
        console.log("Dados recebidos:", data);
      } catch (error) {
        console.error("Erro ao buscar dados da cidade:", error);
      }
    }

    if (cidade) getCidade();
  }, [cidade, navigate]);

  if (!dados) return <p>Carregando...</p>;

  return (
    
     <div className="detalhes-container">
    <Link to="/" ><h3>Detalhes do clima</h3></Link>

      <div className="weather-card">
        <h2 className="city-name">
  {dados?.location?.name ?? "Cidade desconhecida"}, {dados?.location?.country ?? ""}
</h2>

      <p className="temperature">{dados?.current?.temperature ?? "--"}°C</p>
      <p className="weather-description">{dados?.current?.weather_descriptions?.[0] ?? "Sem descrição"}</p>
      {dados?.current?.weather_icons?.[0] && (
        <img className="weather-icon" src={dados.current.weather_icons[0]} alt="Ícone do clima" />
      )}
      <p>Vento: {dados?.current?.wind_speed ?? "--"} km/h ({dados?.current?.wind_dir ?? "--"})</p>
      <p>Umidade: {dados?.current?.humidity ?? "--"}%</p>
      <p>Pressão: {dados?.current?.pressure ?? "--"} hPa</p>
      </div>
    </div>
  );
}
