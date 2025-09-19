import { Title } from "../components/Title";
import { enrollmentInfo } from "../constants";

const Enrollment = () => {
  return (
    <section
      id="inscricao"
      className="text-3xl font-semibold mb-4 text-sky-900 shadow-2xl">
      <Title title={enrollmentInfo.sectionTitle} />
      <div className="highlight mb-4">
        <p>
          <strong>Valor:</strong> {enrollmentInfo.price}
        </p>
        <p>
          <strong>Formas de pagamento:</strong> {enrollmentInfo.paymentMethods}
        </p>
        <p>
          <strong>Vagas extremamente limitadas:</strong> {enrollmentInfo.limitedSpots}
        </p>
        <p>
          <strong>{enrollmentInfo.urgencyText}</strong>
        </p>
      </div>
      <a
        href={enrollmentInfo.whatsappLink}
        className="btn mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded">
        {enrollmentInfo.buttonText}
      </a>
    </section>
  );
};

export default Enrollment;
