import React from "react";

const windows = [
  {
    name: 'uPVC Windows',
    image: 'upvc-windows.jpeg',
    title: 'uPVC Windows in Croydon & Surrey',
    miniDes: 'Enduringly popular, stylish and simple, easy to maintain.uPVC Windows',
    desPartOne:
      'One of the most enduringly popular types of window, uPVC windows offer a host of practical benefits whilst also dramatically enhancing the aesthetic appeal of your home. Their low maintenance finish means that they are incredibly easy to keep clean and do not rot , rust or fade over time. They also improve the security and insulation of your home, eradicating draughts and noise pollution.',
    desPartTwo:
      'We offer an extensive range of uPVC windows here at Supreme Windows London, all offered in a selection of styles, colours and designs. Whatever your requirements, you can guarantee that we will have the perfect window for you and, because we manufacture them ourselves, they are tailored to your exact specifications.\nOur dedicated team are fully trained and highly experienced, ensuring that they have the specialist skills required to perform installations of the most superior standard. And, because all of our windows come with a 10 year guarantee, you can rest assured that they will provide years of reliable service.\nSo for more information on our range of uPVC windows, contact the experts at Supreme Windows London today or visit our showroom in Croydon.',
  },
  {
    name: 'Casement Windows',
    image: 'casement-windows.jpeg',
    title: 'Casement Windows in Croydon & Surrey',
    miniDes: 'Range of styles, beautiful design, excellent ventilation.Casement Windows',
    desPartOne:
      'Here at Supreme Windows London, our comprehensive service includes the manufacture, supply and installation of a range of casement windows. Combining beautiful design with complete functionality, they offer a wealth of practical benefits whilst also adding a touch of luxury to your home. Offered in a range of styles and finishes, we guarantee to have the perfect casement window for your requirements, tastes and budget..',
    desPartTwo:
      'Characterised by their hinged opening, casement windows open wide, making them a great source of ventilation. They are also incredibly low maintenance; they simply wipe clean and don’t risk rotting, fading or peeling over time. Another important benefit is the complete protection they provide; casement windows enhance the warmth and security of your property, whilst also reducing noise pollution and eradicating draughts.\nOur dedicated team of experts can assist you in choosing your ideal casement window and then fit it for you to the most superior standard. When you call upon our assistance, you can be sure of results that last and our 10 year guarantee grants you complete confidence in this.\nSo for more information, simply give the highly experienced team at Supreme Windows London a call today or visit our showroom in Croydon.',
  },
  {
    name: 'Aluminium Windows',
    image: 'aluminium-windows.jpeg',
    title: 'Aluminium Windows in Croydon & Surrey',
    miniDes: 'Sleek, sophisticated finish, strong and durable materials.Aluminium Windows',
    desPartOne:
      'If you are looking for high quality aluminium windows, look no further than Supreme Windows London! We specialise in the supply and installation of a range of metal windows and manufacture them ourselves, ensuring that they are tailored to meet your exact requirements. Aluminium windows benefit from their strong, durable materials and offer an elegant finish which is both thermally efficient and comprehensively secure.',
    desPartTwo:
      'As aluminium windows generally feature slimmer frames, they let a wealth of light into your property, which significantly adds to their beauty and style. No matter what your specifications, our extensive selection of designs and finishes means that we will have the perfect aluminium window for you amongst our range.\nOur team are fully trained and highly experienced, making them complete professionals at window installations. When you call upon our assistance, you can be sure of long-lasting, reliable results and this is backed by our 10 year guarantee.\nIf you would like more information on our aluminium double glazing options, give the experts at Supreme Windows London a call today or visit our showroom in Croydon.',
  },
  {
    name: 'Sash Windows',
    image: 'sash-windows.jpeg',
    title: 'Sash Windows in Croydon & Surrey',
    miniDes: 'Traditional design, elegant finish, modern functionality.Sash Windows',
    desPartOne:
      'Sash windows are one of the most traditional styles of window but, often associated with Victorian and Georgian properties, they have a reputation for rattles, draughts and peeling, damaged frames. However, here at Supreme Windows London we manufacture, supply and install a large selection of double glazed sash windows which combine elegant, traditional design with the functionality of modern materials, such as uPVC.',
    desPartTwo:
      'Our sash windows are capable of dramatically enhancing the visual appeal of your home, adding a touch of style and luxury. Manufactured from durable, high quality materials, they completely protect your property, improving the security and warmth and also eradicating draughts.\nOur specialist team conduct installations of the most superior standard, ensuring that your new windows completely reflect your specifications and fit perfectly. Complete with a 10 year insurance-backed guarantee, our range of sash windows mean you can rest assured of years of long-lasting, reliable service.\nSimply give the friendly team at Supreme Windows London a call today for more information or visit our showroom in Croydon.',
  },
];

const windowsBottomArray = () => {

  return (
    <div>
      <div className="row">
        <div className="col-md-3 col-sm-12">
          <div className="sing_service_item">
            <div className="icon-serv">
              <img src={`assets/images/${windows[0].image}`} alt="" />
            </div>
            <h4>{windows[0].name}</h4>
            <p>{windows[0].miniDes}</p>
          </div>
        </div>
        <div className="col-md-3 col-sm-12">
          <div className="sing_service_item">
            <div className="icon-serv">
              <img src={`assets/images/${windows[1].image}`} alt="" />
            </div>
            <h4>{windows[1].name}</h4>
            <p>{windows[1].miniDes}</p>
          </div>
        </div>
        <div className="col-md-3 col-sm-12">
          <div className="sing_service_item">
            <div className="icon-serv">
              <img src={`assets/images/${windows[2].image}`} alt="" />
            </div>
            <h4>{windows[2].name}</h4>
            <p>{windows[2].miniDes}</p>
          </div>
        </div>
        <div className="col-md-3 col-sm-12">
          <div className="sing_service_item">
            <div className="icon-serv">
              <img src={`assets/images/${windows[3].image}`} alt="" />
            </div>
            <h4>{windows[3].name}</h4>
            <p>{windows[3].miniDes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default windowsBottomArray;
