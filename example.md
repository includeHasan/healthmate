
#pagination example

const fetchDoctors = async (page = 1) => {
    const res = await fetch(`/api/doctors?page=${page}&limit=10`);
    const data = await res.json();
    return data;
};

const DoctorsPage = () => {
    const [doctors, setDoctors] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const loadDoctors = async () => {
            const data = await fetchDoctors(currentPage);
            setDoctors(data.doctors);
        };
        loadDoctors();
    }, [currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <ul>
                {doctors.map(doctor => (
                    <li key={doctor.id}>{doctor.name}</li>
                ))}
            </ul>
            <Pagination currentPage={currentPage} onPageChange={handlePageChange} />
        </div>
    );
};

#pagination component example

const Pagination = ({ currentPage, onPageChange }) => {
    const pages = [1, 2, 3, 4, 5]; // Replace with actual logic for page numbers
    return (
        <div>
            {pages.map(page => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    style={{ margin: '0 5px', backgroundColor: currentPage === page ? 'lightgray' : 'white' }}>
                    {page}
                </button>
            ))}
        </div>
    );
};


#searchBar example

const [query, setQuery] = useState("");

const handleSearch = async () => {
    const res = await fetch(`/api/search?query=${query}`);
    const data = await res.json();
    console.log(data);
};
