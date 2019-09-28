const validator = `<?xml version="1.0" encoding="UTF-8"?>
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">

<!-- Root element -->
<xs:element name="data">
	<xs:complexType>
		<xs:choice maxOccurs="unbounded">
			<xs:element ref="rect" minOccurs="0"/>
			<xs:element ref="circle" minOccurs="0"/>
			<xs:element ref="ellipse" minOccurs="0"/>
		</xs:choice>
	</xs:complexType>
</xs:element>

<!-- Generic posittion, speed and color attributes -->
<xs:attribute name="x" type="xs:decimal" />
<xs:attribute name="y" type="xs:decimal" />
<xs:attribute name="w" type="xs:decimal" />
<xs:attribute name="h" type="xs:decimal" />
<xs:attribute name="r" type="xs:decimal" />
<xs:attribute name="speed" type="xs:decimal" />
<xs:attribute name="color" type="xs:string" /> 

<!-- Geometry -->
<xs:element name="rect">
	<xs:complexType>
		<xs:all>
			<xs:element ref="children"        minOccurs="0" maxOccurs="1"/>	
			<xs:element ref="transformations" minOccurs="0" maxOccurs="1"/>
		</xs:all>
		<xs:attribute ref="x" use="required" />
		<xs:attribute ref="y" use="required" />
		<xs:attribute ref="w" use="required" />
		<xs:attribute ref="h" use="required" />
		<xs:attribute ref="color" use="optional" />
	</xs:complexType>
</xs:element>

<xs:element name="circle">
	<xs:complexType>
		<xs:all>
			<xs:element ref="children"        minOccurs="0" maxOccurs="1"/>	
			<xs:element ref="transformations" minOccurs="0" maxOccurs="1"/>
		</xs:all>
		<xs:attribute ref="x" use="required" />
		<xs:attribute ref="y" use="required" />
		<xs:attribute ref="r" use="required" />
		<xs:attribute ref="color"  use="optional" />
	</xs:complexType>

</xs:element> <xs:element name="ellipse"> <xs:complexType>
		<xs:all>
			<xs:element ref="children"        minOccurs="0" maxOccurs="1"/>	
			<xs:element ref="transformations" minOccurs="0" maxOccurs="1"/>
		</xs:all>
		<xs:attribute ref="x" use="required" />
		<xs:attribute ref="y" use="required" />
		<xs:attribute ref="w" use="required" />
		<xs:attribute ref="h" use="required" />
		<xs:attribute ref="color"  use="optional" />
	</xs:complexType>
</xs:element>

<xs:element name="children">	
	<xs:complexType>
		<xs:choice maxOccurs="unbounded">
			<xs:element ref="rect" minOccurs="0" />
			<xs:element ref="circle" minOccurs="0" />
			<xs:element ref="ellipse" minOccurs="0"/>
		</xs:choice>
	</xs:complexType>
</xs:element>

<!-- Transform and animation -->
<xs:element name="translate">
	<xs:complexType>
		<xs:attribute ref="x" use="required" />
		<xs:attribute ref="y" use="required" />
	</xs:complexType>
</xs:element>

<xs:element name="rotate">
	<xs:complexType>
		<xs:attribute ref="speed" use="required" />
	</xs:complexType>
</xs:element>

<xs:element name="orbit">
	<xs:complexType>
		<xs:attribute ref="speed" use="required" />
	</xs:complexType>
</xs:element>

<xs:element name="transformations">
	<xs:complexType>
		<xs:all>
			<xs:element ref="translate" minOccurs="0"/>
			<xs:element ref="rotate"    minOccurs="0"/>
			<xs:element ref="orbit"     minOccurs="0"/>
		</xs:all>
	</xs:complexType>
</xs:element>

</xs:schema>`

export default validator;
