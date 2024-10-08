export default {
    namespaced: true,
    state: {
        greases: [
            {
                id: 123,
                title: "Automotive Grease",
                sid: "automotive-grease",
                description: "AP-3 Grease is a high-performance grease known for its superior lubrication properties. It is ideal for automotive and industrial applications, providing excellent resistance to water and corrosion.",
                icon: "/img/about/grease.png",
                route: '/grease-list/',
                category: 'grease',
                brand: 'CLG',
                products: [
                    {
                        id: 22,
                        "title": "CLG Chassis Grease",
                        "sid": "CLG-chassis-grease",
                        "description": "CLG Chassis Grease is water-resistant calcium soap based grease with a thickening agent. It was specifically developed for central lubrication systems for commercial vehicles. The product contains anti-oxidants, corrosion inhibitors, extreme pressure and anti-wear additives.",
                        "icon": "/img/about/grease.png",
                        "images": [
                            "https://bootstrapmade.com/demo/templates/Bootslander/assets/img/gallery/gallery-1.jpg",
                            "https://bootstrapmade.com/demo/templates/Bootslander/assets/img/gallery/gallery-2.jpg",
                            "https://bootstrapmade.com/demo/templates/Bootslander/assets/img/gallery/gallery-3.jpg",
                            "https://bootstrapmade.com/demo/templates/Bootslander/assets/img/gallery/gallery-4.jpg",
                            "https://bootstrapmade.com/demo/templates/Bootslander/assets/img/gallery/gallery-5.jpg",
                            "https://bootstrapmade.com/demo/templates/Bootslander/assets/img/gallery/gallery-6.jpg",
                            "https://bootstrapmade.com/demo/templates/Bootslander/assets/img/gallery/gallery-7.jpg",
                            "https://bootstrapmade.com/demo/templates/Bootslander/assets/img/gallery/gallery-8.jpg",
                        ],
                        "table": {
                            tableHead: ["#", "Appearance", "Smooth and Homogeneous"],
                            tableData: [
                                { head: 'NLGI Grade', body: '1', },
                                { head: 'Base Oil Type', body: 'Mineral', },
                                { head: 'Base Oil Viscosity ', body: 'Not specified', },
                                { head: 'Thickener Type', body: 'Calcium', },
                                { head: 'Dropping Point', body: '90 min', },
                                { head: 'EP Properties', body: 'No', },
                                { head: 'Operating Temperature', body: '-10 to 60C', },
                            ],
                        },
                        "benefits": [
                            {
                                "title": "Water-Resistant",
                                "content": "Designed to resist water, ensuring effective lubrication even in wet conditions, essential for vehicle components exposed to rain or water."
                            },
                            {
                                "title": "Calcium Soap Based",
                                "content": "Utilizes a calcium soap thickening agent, providing excellent stability and performance in various operating conditions."
                            },
                            {
                                "title": "Central Lubrication System Compatibility",
                                "content": "Specifically developed for central lubrication systems, ideal for commercial vehicles that use such systems for efficient and consistent lubrication."
                            },
                            {
                                "title": "Anti-Oxidants",
                                "content": "Contains anti-oxidants that prevent the degradation of the grease, extending its service life and maintaining its performance."
                            },
                            {
                                "title": "Corrosion Inhibitors",
                                "content": "Includes corrosion inhibitors to protect metal surfaces from rust and corrosion, enhancing the durability and longevity of vehicle components."
                            },
                            {
                                "title": "Extreme Pressure Additives",
                                "content": "Formulated with extreme pressure additives to withstand high loads and pressure, reducing wear and tear on critical parts."
                            },
                            {
                                "title": "Anti-Wear Additives",
                                "content": "Incorporates anti-wear additives to minimize friction and wear, ensuring smoother operation and extending the life of moving parts."
                            }
                        ],
                        facilities: [
                            {
                                type: "Intermediate Bulk Containers ( IBC )",
                                subTitle: 'Typically 1,000 grams (264 gallons), but can range from 500 to 1,250 grams',
                                description: ' IBCs are large, reusable containers designed for bulk liquids, chemicals, and other materials. They are made from materials such as plastic, steel, or composite materials and often come in a cubic shape for efficient storage and transport.',
                                image: 'https://rctrips.com/assets/itinerary/radisson-hyland-hotel-1.jpeg'
                            },
                            {
                                type: "Drums",
                                subTitle: 'The standard drum in the petroleum industry holds 200 grams (also referred to as a 55-gallon drum in the U.S.)',
                                description: ' Drums are cylindrical containers made of steel or plastic, used for transporting liquids such as oil, lubricants, and other petrochemical products. Other drum capacities include **100 grams* (26 gallons) and smaller sizes like *30 grams*',
                                image: 'https://rctrips.com/assets/itinerary/led-china-4.jpeg'
                            },
                            {
                                type: "Pails",
                                subTitle: 'Typically 18-20 grams (around 5 gallons)',
                                description: 'Pails are small cylindrical containers, usually made of metal or plastic, used for packaging smaller amounts of petroleum products like lubricants or chemicals.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-2.jpg'
                            },
                            {
                                type: "Medium / Small sized containers",
                                subTitle: 'These containers can range from 1 to 50 grams',
                                description: 'They include cans, jugs, and other small packaging units designed for easier handling and distribution of lubricants, chemicals, or other petroleum products.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-3.jpg'
                            },
                        ]
                    },
                    {
                        id: 212,
                        "title": "CLG AP 2 & CLG AP 3",
                        "sid": "CLG-ap-2-&-CLG-ap-3",
                        "description": "Are Lithium Thickener base greases made by using highly refined mineral oils. The have excellent anti-rust and anti-oxidant properties. Recommended for the lubrication of general purpose applications.",
                        "icon": "/img/about/grease.png",
                        "table": {
                            tableHead: ["#", "Appearance", "Smooth and Homogeneous"],
                            tableData: [
                                { head: 'NLGI Grade', body: '2 & 3', },
                                { head: 'Base Oil Type', body: 'Mineral', },
                                { head: 'Base Oil Viscosity ', body: 'VG 100', },
                                { head: 'Thickener Type', body: 'Lithium', },
                                { head: 'Dropping Point, oC', body: '180 min', },
                                { head: 'EP Properties', body: 'No', },
                                { head: 'Operating Temperature', body: '-20  to 120C', },
                            ],
                        },
                        "benefits": [
                            {
                                "title": "Lithium Thickener Base",
                                "content": "Utilizes a lithium thickener base for enhanced stability and performance in a wide range of conditions."
                            },
                            {
                                "title": "Highly Refined Mineral Oils",
                                "content": "Made using highly refined mineral oils, ensuring superior lubrication and protection for general purpose applications."
                            },
                            {
                                "title": "Anti-Rust Properties",
                                "content": "Contains anti-rust properties to prevent rust formation and protect metal surfaces."
                            },
                            {
                                "title": "Anti-Oxidant Properties",
                                "content": "Features excellent anti-oxidant properties to resist degradation and maintain grease performance over time."
                            },
                            {
                                "title": "General Purpose Lubrication",
                                "content": "Recommended for a variety of general purpose lubrication applications, providing reliable performance across different uses."
                            }
                        ],
                        facilities: [
                            {
                                type: "Intermediate Bulk Containers ( IBC )",
                                subTitle: 'Typically 1,000 grams (264 gallons), but can range from 500 to 1,250 grams',
                                description: ' IBCs are large, reusable containers designed for bulk liquids, chemicals, and other materials. They are made from materials such as plastic, steel, or composite materials and often come in a cubic shape for efficient storage and transport.',
                                image: 'https://rctrips.com/assets/itinerary/radisson-hyland-hotel-1.jpeg'
                            },
                            {
                                type: "Drums",
                                subTitle: 'The standard drum in the petroleum industry holds 200 grams (also referred to as a 55-gallon drum in the U.S.)',
                                description: ' Drums are cylindrical containers made of steel or plastic, used for transporting liquids such as oil, lubricants, and other petrochemical products. Other drum capacities include **100 grams* (26 gallons) and smaller sizes like *30 grams*',
                                image: 'https://rctrips.com/assets/itinerary/led-china-4.jpeg'
                            },
                            {
                                type: "Pails",
                                subTitle: 'Typically 18-20 grams (around 5 gallons)',
                                description: 'Pails are small cylindrical containers, usually made of metal or plastic, used for packaging smaller amounts of petroleum products like lubricants or chemicals.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-2.jpg'
                            },
                            {
                                type: "Medium / Small sized containers",
                                subTitle: 'These containers can range from 1 to 50 grams',
                                description: 'They include cans, jugs, and other small packaging units designed for easier handling and distribution of lubricants, chemicals, or other petroleum products.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-3.jpg'
                            },
                        ]
                    },
                    {
                        id: 232,
                        "title": "CLG soda based wb grease",
                        "sid": "CLG-soda-based-wb-grease",
                        "description": " The demand of soda base greases are getting down slowly. Now a days people are preferring Lithium base greases instead of soda base greases.",
                        "icon": "/img/about/grease.png",
                        "table": {
                            tableHead: ["#", "Appearance", "Smooth and Homogeneous"],
                            tableData: [
                                { head: 'NLGI Grade', body: '2', },
                                { head: 'Base Oil Type', body: 'Mineral', },
                                { head: 'Base Oil Viscosity ', body: '19 cSt min', },
                                { head: 'Thickener Type', body: 'Sodium', },
                                { head: 'Dropping Point', body: '180 min', },
                                { head: 'EP Properties', body: 'Yes', },
                                { head: 'Operating Temperature', body: '-10 to 120C', },
                            ],
                        },
                        "benefits": [
                            {
                                "title": "Cost-Effective",
                                "content": "Soda based greases can be more economical compared to lithium based alternatives, offering a cost-effective solution for lubrication needs."
                            },
                            {
                                "title": "Adequate Performance",
                                "content": "Provides adequate lubrication and protection for various applications, meeting the needs of less demanding environments."
                            },
                            {
                                "title": "Established Track Record",
                                "content": "Has a history of reliability in various applications, demonstrating its effectiveness in specific use cases."
                            }
                        ],
                        facilities: [
                            {
                                type: "Intermediate Bulk Containers ( IBC )",
                                subTitle: 'Typically 1,000 grams (264 gallons), but can range from 500 to 1,250 grams',
                                description: ' IBCs are large, reusable containers designed for bulk liquids, chemicals, and other materials. They are made from materials such as plastic, steel, or composite materials and often come in a cubic shape for efficient storage and transport.',
                                image: 'https://rctrips.com/assets/itinerary/radisson-hyland-hotel-1.jpeg'
                            },
                            {
                                type: "Drums",
                                subTitle: 'The standard drum in the petroleum industry holds 200 grams (also referred to as a 55-gallon drum in the U.S.)',
                                description: ' Drums are cylindrical containers made of steel or plastic, used for transporting liquids such as oil, lubricants, and other petrochemical products. Other drum capacities include **100 grams* (26 gallons) and smaller sizes like *30 grams*',
                                image: 'https://rctrips.com/assets/itinerary/led-china-4.jpeg'
                            },
                            {
                                type: "Pails",
                                subTitle: 'Typically 18-20 grams (around 5 gallons)',
                                description: 'Pails are small cylindrical containers, usually made of metal or plastic, used for packaging smaller amounts of petroleum products like lubricants or chemicals.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-2.jpg'
                            },
                            {
                                type: "Medium / Small sized containers",
                                subTitle: 'These containers can range from 1 to 50 grams',
                                description: 'They include cans, jugs, and other small packaging units designed for easier handling and distribution of lubricants, chemicals, or other petroleum products.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-3.jpg'
                            },
                        ]
                    },
                    {
                        id: 227,
                        "title": "CLG lithium, moly",
                        "sid": "CLG-lithium-moly",
                        "description": "Are Lithium Thickener base greases made by using highly refined mineral oils, additives along with solid lubricants They have excellent anti-rust and anti-oxidant properties. Recommended for shock load applications.",
                        "icon": "/img/about/grease.png",
                        "table": {
                            tableHead: ["#", "Appearance", "Dark Grey ,Smooth and Homogeneous"],
                            tableData: [
                                { head: 'NLGI Grade', body: '2', },
                                { head: 'Base Oil Type', body: 'Mineral', },
                                { head: 'Base Oil Viscosity ', body: 'VG 150', },
                                { head: 'Thickener Type', body: 'Lithium', },
                                { head: 'Dropping Point, oC', body: '180 min', },
                                { head: 'EP Properties', body: 'Yes (Contains Moly)', },
                                { head: 'Operating Temperature', body: '-20 to 120C', },
                            ],
                        },
                        "benefits": [
                            {
                                "title": "Lithium Thickener Base",
                                "content": "Utilizes a lithium thickener base for improved stability and performance across various operating conditions."
                            },
                            {
                                "title": "Highly Refined Mineral Oils",
                                "content": "Made with highly refined mineral oils for superior lubrication and extended service life."
                            },
                            {
                                "title": "Solid Lubricants",
                                "content": "Incorporates solid lubricants that enhance lubrication and reduce friction under high-load conditions."
                            },
                            {
                                "title": "Anti-Rust Properties",
                                "content": "Features excellent anti-rust properties to protect metal surfaces from corrosion and rust."
                            },
                            {
                                "title": "Anti-Oxidant Properties",
                                "content": "Contains anti-oxidants to resist degradation and maintain grease effectiveness over time."
                            },
                            {
                                "title": "Shock Load Application",
                                "content": "Recommended for applications subjected to shock loads, providing reliable protection and performance under challenging conditions."
                            }
                        ],
                        facilities: [
                            {
                                type: "Intermediate Bulk Containers ( IBC )",
                                subTitle: 'Typically 1,000 grams (264 gallons), but can range from 500 to 1,250 grams',
                                description: ' IBCs are large, reusable containers designed for bulk liquids, chemicals, and other materials. They are made from materials such as plastic, steel, or composite materials and often come in a cubic shape for efficient storage and transport.',
                                image: 'https://rctrips.com/assets/itinerary/radisson-hyland-hotel-1.jpeg'
                            },
                            {
                                type: "Drums",
                                subTitle: 'The standard drum in the petroleum industry holds 200 grams (also referred to as a 55-gallon drum in the U.S.)',
                                description: ' Drums are cylindrical containers made of steel or plastic, used for transporting liquids such as oil, lubricants, and other petrochemical products. Other drum capacities include **100 grams* (26 gallons) and smaller sizes like *30 grams*',
                                image: 'https://rctrips.com/assets/itinerary/led-china-4.jpeg'
                            },
                            {
                                type: "Pails",
                                subTitle: 'Typically 18-20 grams (around 5 gallons)',
                                description: 'Pails are small cylindrical containers, usually made of metal or plastic, used for packaging smaller amounts of petroleum products like lubricants or chemicals.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-2.jpg'
                            },
                            {
                                type: "Medium / Small sized containers",
                                subTitle: 'These containers can range from 1 to 50 grams',
                                description: 'They include cans, jugs, and other small packaging units designed for easier handling and distribution of lubricants, chemicals, or other petroleum products.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-3.jpg'
                            },
                        ]
                    },
                    {
                        id: 229,
                        "title": "CLG CVJ Grease",
                        "sid": "CLG-cvj-grease",
                        "description": "CVJ Grease is a premium quality grease specially developed for the lubrication of bearings of all types of Constant Velocity Joints used in cars, light and medium duty commercial vehicles. Grease is based on a Lithium Complex soap thickener and highly refined oxidation resistant mineral base fluid fortified with superior quality rust and oxidation inhibitor additives. Special additive system provides excellent friction reduction and resistance to fretting corrosion. CVJ greases also contain fine grade solid lubricants to combat friction.",
                        "icon": "/img/about/grease.png",
                        "table": {
                            tableHead: ["#", "Appearance", "Dark Grey ,Smooth and Homogeneous"],
                            tableData: [
                                { head: 'NLGI Grade', body: '1 & 2', },
                                { head: 'Base Oil Type', body: 'Mineral', },
                                { head: 'Base Oil Viscosity ', body: '150 cSt min', },
                                { head: 'Thickener Type', body: 'Lithium complex', },
                                { head: 'Dropping Point, oC', body: '220  min', },
                                { head: 'EP Properties', body: 'Yes ', },
                                { head: 'Operating Temperature', body: '-20 to 140C', },
                            ],
                        },
                        "benefits": [
                            {
                                "title": "Lithium Complex Soap Thickener",
                                "content": "Utilizes a Lithium Complex soap thickener for enhanced stability, performance, and resistance to high temperatures and pressure."
                            },
                            {
                                "title": "Highly Refined Oxidation-Resistant Mineral Base Fluid",
                                "content": "Made with highly refined, oxidation-resistant mineral base fluid to ensure superior lubrication and extended service life."
                            },
                            {
                                "title": "Superior Rust and Oxidation Inhibitors",
                                "content": "Fortified with high-quality rust and oxidation inhibitor additives to protect against corrosion and degradation."
                            },
                            {
                                "title": "Excellent Friction Reduction",
                                "content": "Special additive system provides excellent friction reduction, improving efficiency and reducing wear on bearings."
                            },
                            {
                                "title": "Resistance to Fretting Corrosion",
                                "content": "Offers high resistance to fretting corrosion, which enhances the durability and reliability of constant velocity joints."
                            },
                            {
                                "title": "Fine Grade Solid Lubricants",
                                "content": "Contains fine-grade solid lubricants to further combat friction and enhance lubrication under demanding conditions."
                            }
                        ],
                        facilities: [
                            {
                                type: "Intermediate Bulk Containers ( IBC )",
                                subTitle: 'Typically 1,000 grams (264 gallons), but can range from 500 to 1,250 grams',
                                description: ' IBCs are large, reusable containers designed for bulk liquids, chemicals, and other materials. They are made from materials such as plastic, steel, or composite materials and often come in a cubic shape for efficient storage and transport.',
                                image: 'https://rctrips.com/assets/itinerary/radisson-hyland-hotel-1.jpeg'
                            },
                            {
                                type: "Drums",
                                subTitle: 'The standard drum in the petroleum industry holds 200 grams (also referred to as a 55-gallon drum in the U.S.)',
                                description: ' Drums are cylindrical containers made of steel or plastic, used for transporting liquids such as oil, lubricants, and other petrochemical products. Other drum capacities include **100 grams* (26 gallons) and smaller sizes like *30 grams*',
                                image: 'https://rctrips.com/assets/itinerary/led-china-4.jpeg'
                            },
                            {
                                type: "Pails",
                                subTitle: 'Typically 18-20 grams (around 5 gallons)',
                                description: 'Pails are small cylindrical containers, usually made of metal or plastic, used for packaging smaller amounts of petroleum products like lubricants or chemicals.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-2.jpg'
                            },
                            {
                                type: "Medium / Small sized containers",
                                subTitle: 'These containers can range from 1 to 50 grams',
                                description: 'They include cans, jugs, and other small packaging units designed for easier handling and distribution of lubricants, chemicals, or other petroleum products.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-3.jpg'
                            },
                        ]
                    },
                    {
                        id: 22772,
                        "title": "CLG Pin & bush grease",
                        "sid": "CLG-pin-&-bush-grease",
                        "description": "Pin & Bush grease is well known multi-purpose Lithium grease. The grease allows the presence of very fine grade graphite which will fill surfaces and distribute load evenly preventing further wear and tear. It is suitable for the lubrication of various industrial, agricultural and earth moving equipment applications.",
                        "icon": "/img/about/grease.png",
                        "table": {
                            tableHead: ["#", "Appearance", "Dark Grey ,Smooth and Homogeneous"],
                            tableData: [
                                { head: 'NLGI Grade', body: '1.5', },
                                { head: 'Base Oil Type', body: 'Mineral', },
                                { head: 'Base Oil Viscosity ', body: 'VG 150 ', },
                                { head: 'Thickener Type', body: 'Lithium complex', },
                                { head: 'Dropping Point, oC', body: '220  min', },
                                { head: 'EP & AW Properties', body: 'Yes ', },
                                { head: 'Operating Temperature', body: '-20 to 130C', },
                            ],
                        },
                        "benefits": [
                            {
                                "title": "Multi-Purpose Lithium Grease",
                                "content": "Versatile grease suitable for a wide range of applications in industrial, agricultural, and earth-moving equipment."
                            },
                            {
                                "title": "Fine-Grade Graphite",
                                "content": "Contains very fine-grade graphite that fills surfaces and evenly distributes load, reducing wear and tear."
                            },
                            {
                                "title": "Wear Prevention",
                                "content": "Helps prevent further wear and tear on components by providing effective lubrication and load distribution."
                            },
                            {
                                "title": "Versatile Applications",
                                "content": "Suitable for various applications across different sectors, including industrial, agricultural, and earth-moving equipment."
                            }
                        ],
                        facilities: [
                            {
                                type: "Intermediate Bulk Containers ( IBC )",
                                subTitle: 'Typically 1,000 grams (264 gallons), but can range from 500 to 1,250 grams',
                                description: ' IBCs are large, reusable containers designed for bulk liquids, chemicals, and other materials. They are made from materials such as plastic, steel, or composite materials and often come in a cubic shape for efficient storage and transport.',
                                image: 'https://rctrips.com/assets/itinerary/radisson-hyland-hotel-1.jpeg'
                            },
                            {
                                type: "Drums",
                                subTitle: 'The standard drum in the petroleum industry holds 200 grams (also referred to as a 55-gallon drum in the U.S.)',
                                description: ' Drums are cylindrical containers made of steel or plastic, used for transporting liquids such as oil, lubricants, and other petrochemical products. Other drum capacities include **100 grams* (26 gallons) and smaller sizes like *30 grams*',
                                image: 'https://rctrips.com/assets/itinerary/led-china-4.jpeg'
                            },
                            {
                                type: "Pails",
                                subTitle: 'Typically 18-20 grams (around 5 gallons)',
                                description: 'Pails are small cylindrical containers, usually made of metal or plastic, used for packaging smaller amounts of petroleum products like lubricants or chemicals.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-2.jpg'
                            },
                            {
                                type: "Medium / Small sized containers",
                                subTitle: 'These containers can range from 1 to 50 grams',
                                description: 'They include cans, jugs, and other small packaging units designed for easier handling and distribution of lubricants, chemicals, or other petroleum products.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-3.jpg'
                            },
                        ]
                    },
                    {
                        "id": 62,
                        "title": "CLG MP3 Grease",
                        "sid": "CLG-mp3-grease",
                        "description": "Are Lithium Thickener base greases made by using highly refined heavy mineral oils. They have excellent anti-rust and anti-oxidant properties. Recommended for the lubrication of general purpose applications.",
                        "benefits": [
                            {
                                "title": "Lithium Thickener Base",
                                "content": "Utilizes a lithium thickener base for stable performance and enhanced lubrication across various conditions."
                            },
                            {
                                "title": "Highly Refined Heavy Mineral Oils",
                                "content": "Made with highly refined heavy mineral oils for superior lubrication and extended service life."
                            },
                            {
                                "title": "Anti-Rust Properties",
                                "content": "Features excellent anti-rust properties to protect metal surfaces from corrosion."
                            },
                            {
                                "title": "Anti-Oxidant Properties",
                                "content": "Contains anti-oxidants to resist degradation and maintain grease effectiveness over time."
                            }
                        ],
                        "table": {
                            tableHead: ["#", "Appearance", "Smooth and Homogeneous"],
                            tableData: [
                                { head: 'NLGI Grade', body: '2 & 3', },
                                { head: 'Base Oil Type', body: 'Mineral', },
                                { head: 'Base Oil Viscosity ', body: 'VG 100 ', },
                                { head: 'Thickener Type', body: 'Lithium  ', },
                                { head: 'Dropping Point, oC', body: '180  min', },
                                { head: 'EP Properties', body: 'No ', },
                                { head: 'Operating Temperature', body: '-20 to 120C', },
                            ],
                        },
                        "icon": "/img/about/grease.png",
                        facilities: [
                            {
                                type: "Intermediate Bulk Containers ( IBC )",
                                subTitle: 'Typically 1,000 grams (264 gallons), but can range from 500 to 1,250 grams',
                                description: ' IBCs are large, reusable containers designed for bulk liquids, chemicals, and other materials. They are made from materials such as plastic, steel, or composite materials and often come in a cubic shape for efficient storage and transport.',
                                image: 'https://rctrips.com/assets/itinerary/radisson-hyland-hotel-1.jpeg'
                            },
                            {
                                type: "Drums",
                                subTitle: 'The standard drum in the petroleum industry holds 200 grams (also referred to as a 55-gallon drum in the U.S.)',
                                description: ' Drums are cylindrical containers made of steel or plastic, used for transporting liquids such as oil, lubricants, and other petrochemical products. Other drum capacities include **100 grams* (26 gallons) and smaller sizes like *30 grams*',
                                image: 'https://rctrips.com/assets/itinerary/led-china-4.jpeg'
                            },
                            {
                                type: "Pails",
                                subTitle: 'Typically 18-20 grams (around 5 gallons)',
                                description: 'Pails are small cylindrical containers, usually made of metal or plastic, used for packaging smaller amounts of petroleum products like lubricants or chemicals.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-2.jpg'
                            },
                            {
                                type: "Medium / Small sized containers",
                                subTitle: 'These containers can range from 1 to 50 grams',
                                description: 'They include cans, jugs, and other small packaging units designed for easier handling and distribution of lubricants, chemicals, or other petroleum products.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-3.jpg'
                            },
                        ]
                    },
                    {
                        "id": 2266,
                        "title": "CLG Li-ca WR Grease",
                        "sid": "CLG-li-ca-we-grease",
                        "description": "CLG Li-ca WR Grease is a premium lithium-calcium-based grease formulated to provide excellent water resistance and superior protection against rust and corrosion. Ideal for heavy-duty applications in wet and high-moisture environments.",
                        "benefits": [
                            {
                                "title": "Lithium-Calcium Base",
                                "content": "Combines lithium and calcium thickeners for enhanced water resistance and performance in wet conditions."
                            },
                            {
                                "title": "Excellent Water Resistance",
                                "content": "Offers superior protection in high-moisture environments, preventing washout and maintaining lubrication."
                            },
                            {
                                "title": "Rust and Corrosion Protection",
                                "content": "Provides superior protection against rust and corrosion, ensuring durability in challenging environments."
                            },
                            {
                                "title": "Heavy-Duty Applications",
                                "content": "Ideal for use in heavy-duty applications requiring reliable performance under high stress and moisture."
                            }
                        ],
                        "table": {
                            tableHead: ["#", "Appearance", "Smooth and Homogeneous"],
                            tableData: [
                                { head: 'NLGI Grade', body: '1.5', },
                                { head: 'Base Oil Type', body: 'Mineral', },
                                { head: 'Base Oil Viscosity ', body: 'VG 150 ', },
                                { head: 'Thickener Type', body: 'Lithium Calcium ', },
                                { head: 'Dropping Point, oC', body: '180  min', },
                                { head: 'EP Properties', body: 'Yes ', },
                                { head: 'Operating Temperature', body: '-20 to 120C', },
                            ],
                        },
                        "icon": "/img/about/grease.png",
                        facilities: [
                            {
                                type: "Intermediate Bulk Containers ( IBC )",
                                subTitle: 'Typically 1,000 grams (264 gallons), but can range from 500 to 1,250 grams',
                                description: ' IBCs are large, reusable containers designed for bulk liquids, chemicals, and other materials. They are made from materials such as plastic, steel, or composite materials and often come in a cubic shape for efficient storage and transport.',
                                image: 'https://rctrips.com/assets/itinerary/radisson-hyland-hotel-1.jpeg'
                            },
                            {
                                type: "Drums",
                                subTitle: 'The standard drum in the petroleum industry holds 200 grams (also referred to as a 55-gallon drum in the U.S.)',
                                description: ' Drums are cylindrical containers made of steel or plastic, used for transporting liquids such as oil, lubricants, and other petrochemical products. Other drum capacities include **100 grams* (26 gallons) and smaller sizes like *30 grams*',
                                image: 'https://rctrips.com/assets/itinerary/led-china-4.jpeg'
                            },
                            {
                                type: "Pails",
                                subTitle: 'Typically 18-20 grams (around 5 gallons)',
                                description: 'Pails are small cylindrical containers, usually made of metal or plastic, used for packaging smaller amounts of petroleum products like lubricants or chemicals.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-2.jpg'
                            },
                            {
                                type: "Medium / Small sized containers",
                                subTitle: 'These containers can range from 1 to 50 grams',
                                description: 'They include cans, jugs, and other small packaging units designed for easier handling and distribution of lubricants, chemicals, or other petroleum products.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-3.jpg'
                            },
                        ]
                    },
                    {
                        "id": 2233,
                        "title": "CLG Sulfonate Complex WR Grease",
                        "sid": "CLG-sulfonate-complex-wr-grease",
                        "description": "CLG Sulfonate Complex WR Grease is an advanced high-performance grease, designed with calcium sulfonate complex to offer exceptional load-carrying capabilities and outstanding water resistance. Perfect for demanding industrial and marine applications.",
                        "table": {
                            tableHead: ["#", "Appearance", "Smooth and Homogeneous"],
                            tableData: [
                                { head: 'NLGI Grade', body: '2', },
                                { head: 'Base Oil Type', body: 'Mineral', },
                                { head: 'Base Oil Viscosity ', body: 'VG 150 ', },
                                { head: 'Thickener Type', body: 'Calcium Sulfonate Complex', },
                                { head: 'Dropping Point, oC', body: '280  min', },
                                { head: 'EP & AW Properties', body: 'Yes ', },
                                { head: 'Operating Temperature', body: '-20 to 160C', },
                            ],
                        },
                        "benefits": [
                            {
                                "title": "Calcium Sulfonate Complex",
                                "content": "Utilizes calcium sulfonate complex for exceptional load-carrying capacity and enhanced performance."
                            },
                            {
                                "title": "Outstanding Water Resistance",
                                "content": "Offers superior water resistance, making it ideal for use in marine and industrial environments."
                            },
                            {
                                "title": "High-Performance",
                                "content": "Designed for demanding applications, providing reliable performance under extreme conditions."
                            }
                        ],
                        "icon": "/img/about/grease.png",
                        facilities: [
                            {
                                type: "Intermediate Bulk Containers ( IBC )",
                                subTitle: 'Typically 1,000 grams (264 gallons), but can range from 500 to 1,250 grams',
                                description: ' IBCs are large, reusable containers designed for bulk liquids, chemicals, and other materials. They are made from materials such as plastic, steel, or composite materials and often come in a cubic shape for efficient storage and transport.',
                                image: 'https://rctrips.com/assets/itinerary/radisson-hyland-hotel-1.jpeg'
                            },
                            {
                                type: "Drums",
                                subTitle: 'The standard drum in the petroleum industry holds 200 grams (also referred to as a 55-gallon drum in the U.S.)',
                                description: ' Drums are cylindrical containers made of steel or plastic, used for transporting liquids such as oil, lubricants, and other petrochemical products. Other drum capacities include **100 grams* (26 gallons) and smaller sizes like *30 grams*',
                                image: 'https://rctrips.com/assets/itinerary/led-china-4.jpeg'
                            },
                            {
                                type: "Pails",
                                subTitle: 'Typically 18-20 grams (around 5 gallons)',
                                description: 'Pails are small cylindrical containers, usually made of metal or plastic, used for packaging smaller amounts of petroleum products like lubricants or chemicals.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-2.jpg'
                            },
                            {
                                type: "Medium / Small sized containers",
                                subTitle: 'These containers can range from 1 to 50 grams',
                                description: 'They include cans, jugs, and other small packaging units designed for easier handling and distribution of lubricants, chemicals, or other petroleum products.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-3.jpg'
                            },
                        ]
                    },
                    {
                        "id": 22121,
                        "title": "CLG Li EP 00 & EP 000",
                        "sid": "CLG-li-ep-00-&-ep-000",
                        "description": "Lithium Thickener base greases made by using highly refined mineral oils. They have excellent EP, anti-rust, and anti-oxidant properties. Recommended for the lubrication of closed gear applications. These greases have excellent pumpability.",
                        "benefits": [
                            {
                                "title": "Lithium Thickener Base",
                                "content": "Provides stability and performance in various lubrication applications."
                            },
                            {
                                "title": "Excellent EP Properties",
                                "content": "Formulated with extreme pressure (EP) additives to handle high-load conditions effectively."
                            },
                            {
                                "title": "Anti-Rust and Anti-Oxidant Properties",
                                "content": "Contains additives to prevent rust and oxidation, ensuring long-term reliability."
                            },
                            {
                                "title": "Excellent Pumpability",
                                "content": "Features excellent pumpability, making it suitable for use in centralized lubrication systems."
                            }
                        ],
                        "table": {
                            tableHead: ["#", "Appearance", "Smooth and Homogeneous"],
                            tableData: [
                                { head: 'NLGI Grade', body: '00 & 000', },
                                { head: 'Base Oil Type', body: 'Mineral', },
                                { head: 'Base Oil Viscosity ', body: 'VG 150 ', },
                                { head: 'Thickener Type', body: 'Lithium', },
                                { head: 'Dropping Point, oC', body: '-', },
                                { head: 'EP Properties', body: 'Yes ', },
                                { head: 'Operating Temperature', body: '-30 to 130C', },
                            ],
                        },
                        "icon": "/img/about/grease.png",
                        facilities: [
                            {
                                type: "Intermediate Bulk Containers ( IBC )",
                                subTitle: 'Typically 1,000 grams (264 gallons), but can range from 500 to 1,250 grams',
                                description: ' IBCs are large, reusable containers designed for bulk liquids, chemicals, and other materials. They are made from materials such as plastic, steel, or composite materials and often come in a cubic shape for efficient storage and transport.',
                                image: 'https://rctrips.com/assets/itinerary/radisson-hyland-hotel-1.jpeg'
                            },
                            {
                                type: "Drums",
                                subTitle: 'The standard drum in the petroleum industry holds 200 grams (also referred to as a 55-gallon drum in the U.S.)',
                                description: ' Drums are cylindrical containers made of steel or plastic, used for transporting liquids such as oil, lubricants, and other petrochemical products. Other drum capacities include **100 grams* (26 gallons) and smaller sizes like *30 grams*',
                                image: 'https://rctrips.com/assets/itinerary/led-china-4.jpeg'
                            },
                            {
                                type: "Pails",
                                subTitle: 'Typically 18-20 grams (around 5 gallons)',
                                description: 'Pails are small cylindrical containers, usually made of metal or plastic, used for packaging smaller amounts of petroleum products like lubricants or chemicals.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-2.jpg'
                            },
                            {
                                type: "Medium / Small sized containers",
                                subTitle: 'These containers can range from 1 to 50 grams',
                                description: 'They include cans, jugs, and other small packaging units designed for easier handling and distribution of lubricants, chemicals, or other petroleum products.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-3.jpg'
                            },
                        ]
                    },
                    {
                        "id": 2298,
                        "title": "CLG Li EP 2 and Li EP 3 Grease",
                        "sid": "CLG-li-ep-2-and-li-ep-3-grease",
                        "description": "Lithium Thickener base greases made by using highly refined heavy mineral oils. They have excellent EP, anti-rust, and anti-oxidant properties. Recommended for the lubrication of bearings.",
                        "benefits": [
                            {
                                "title": "Lithium Thickener Base",
                                "content": "Provides reliable stability and lubrication in various conditions."
                            },
                            {
                                "title": "Highly Refined Heavy Mineral Oils",
                                "content": "Made with refined heavy mineral oils for superior performance and extended life."
                            },
                            {
                                "title": "Excellent EP Properties",
                                "content": "Formulated with extreme pressure (EP) additives to manage high loads effectively."
                            },
                            {
                                "title": "Anti-Rust and Anti-Oxidant Properties",
                                "content": "Includes anti-rust and anti-oxidant additives to protect bearings and extend service life."
                            }
                        ],
                        "table": {
                            tableHead: ["#", "Appearance", "Smooth and Homogeneous"],
                            tableData: [
                                { head: 'NLGI Grade', body: '2 & 3', },
                                { head: 'Base Oil Type', body: 'Mineral', },
                                { head: 'Base Oil Viscosity ', body: 'VG 150 ', },
                                { head: 'Thickener Type', body: 'Lithium', },
                                { head: 'Dropping Point, oC', body: '180 min', },
                                { head: 'EP Properties', body: 'Yes ', },
                                { head: 'Operating Temperature', body: '-20 to 120C', },
                            ],
                        },
                        "icon": "/img/about/grease.png",
                        facilities: [
                            {
                                type: "Intermediate Bulk Containers ( IBC )",
                                subTitle: 'Typically 1,000 grams (264 gallons), but can range from 500 to 1,250 grams',
                                description: ' IBCs are large, reusable containers designed for bulk liquids, chemicals, and other materials. They are made from materials such as plastic, steel, or composite materials and often come in a cubic shape for efficient storage and transport.',
                                image: 'https://rctrips.com/assets/itinerary/radisson-hyland-hotel-1.jpeg'
                            },
                            {
                                type: "Drums",
                                subTitle: 'The standard drum in the petroleum industry holds 200 grams (also referred to as a 55-gallon drum in the U.S.)',
                                description: ' Drums are cylindrical containers made of steel or plastic, used for transporting liquids such as oil, lubricants, and other petrochemical products. Other drum capacities include **100 grams* (26 gallons) and smaller sizes like *30 grams*',
                                image: 'https://rctrips.com/assets/itinerary/led-china-4.jpeg'
                            },
                            {
                                type: "Pails",
                                subTitle: 'Typically 18-20 grams (around 5 gallons)',
                                description: 'Pails are small cylindrical containers, usually made of metal or plastic, used for packaging smaller amounts of petroleum products like lubricants or chemicals.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-2.jpg'
                            },
                            {
                                type: "Medium / Small sized containers",
                                subTitle: 'These containers can range from 1 to 50 grams',
                                description: 'They include cans, jugs, and other small packaging units designed for easier handling and distribution of lubricants, chemicals, or other petroleum products.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-3.jpg'
                            },
                        ]
                    },
                    {
                        "id": 22556,
                        "title": "CLG Low Noise Grease",
                        "sid": "CLG-low-noise-grease",
                        "description": "The low-noise characteristic of this Lithium Complex grease makes it suitable for applications that include rolling bearings in electric motors, fans, air conditioners, generators, and belt tighteners in cars, electric household appliances, and office equipment. The grease performs exceptionally well at low temperatures.",
                        "benefits": [
                            {
                                "title": "Low Noise Characteristic",
                                "content": "Designed to minimize noise, making it ideal for applications requiring quiet operation."
                            },
                            {
                                "title": "Lithium Complex Base",
                                "content": "Utilizes a lithium complex thickener for enhanced performance and stability in various applications."
                            },
                            {
                                "title": "Excellent Low-Temperature Performance",
                                "content": "Performs exceptionally well at low temperatures, ensuring reliable operation in cold conditions."
                            },
                            {
                                "title": "Versatile Applications",
                                "content": "Suitable for use in a variety of equipment, including electric motors, fans, and office appliances."
                            }
                        ],
                        "table": {
                            tableHead: ["#", "Appearance", "Smooth and Homogeneous"],
                            tableData: [
                                { head: 'NLGI Grade', body: '1 or 2', },
                                { head: 'Base Oil Type', body: 'Mineral', },
                                { head: 'Base Oil Viscosity ', body: '70 cSt min ', },
                                { head: 'Thickener Type', body: 'Lithium complex ', },
                                { head: 'Dropping Point, oC', body: '220  min', },
                                { head: 'EP & AW Properties', body: 'Yes ', },
                                { head: 'Operating Temperature', body: '-30 to 130C', },
                            ],
                        },
                        "icon": "/img/about/grease.png",
                        facilities: [
                            {
                                type: "Intermediate Bulk Containers ( IBC )",
                                subTitle: 'Typically 1,000 grams (264 gallons), but can range from 500 to 1,250 grams',
                                description: ' IBCs are large, reusable containers designed for bulk liquids, chemicals, and other materials. They are made from materials such as plastic, steel, or composite materials and often come in a cubic shape for efficient storage and transport.',
                                image: 'https://rctrips.com/assets/itinerary/radisson-hyland-hotel-1.jpeg'
                            },
                            {
                                type: "Drums",
                                subTitle: 'The standard drum in the petroleum industry holds 200 grams (also referred to as a 55-gallon drum in the U.S.)',
                                description: ' Drums are cylindrical containers made of steel or plastic, used for transporting liquids such as oil, lubricants, and other petrochemical products. Other drum capacities include **100 grams* (26 gallons) and smaller sizes like *30 grams*',
                                image: 'https://rctrips.com/assets/itinerary/led-china-4.jpeg'
                            },
                            {
                                type: "Pails",
                                subTitle: 'Typically 18-20 grams (around 5 gallons)',
                                description: 'Pails are small cylindrical containers, usually made of metal or plastic, used for packaging smaller amounts of petroleum products like lubricants or chemicals.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-2.jpg'
                            },
                            {
                                type: "Medium / Small sized containers",
                                subTitle: 'These containers can range from 1 to 50 grams',
                                description: 'They include cans, jugs, and other small packaging units designed for easier handling and distribution of lubricants, chemicals, or other petroleum products.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-3.jpg'
                            },
                        ]
                    },
                    {
                        "id": 22333,
                        "title": "CLG Low Noise Polyurea Grease",
                        "sid": "CLG-low-noise-polyurea-grease",
                        "description": "The low-noise characteristic of this Polyurea grease makes it suitable for applications that include rolling bearings in electric motors, fans, air conditioners, generators, and belt tighteners in cars, electric household appliances, and office equipment. The grease performs exceptionally well in Electric Vehicles.",
                        "benefits": [
                            {
                                "title": "Low Noise Characteristic",
                                "content": "Minimizes noise, making it ideal for quiet operation in sensitive applications."
                            },
                            {
                                "title": "Polyurea Base",
                                "content": "Utilizes polyurea thickener for excellent performance in demanding applications."
                            },
                            {
                                "title": "Excellent Performance in Electric Vehicles",
                                "content": "Designed to perform exceptionally well in electric vehicles, providing reliable lubrication."
                            },
                            {
                                "title": "Versatile Applications",
                                "content": "Suitable for various applications including electric motors, fans, and household appliances."
                            }
                        ],
                        "table": {
                            tableHead: ["#", "Appearance", "Smooth and Homogeneous"],
                            tableData: [
                                { head: 'NLGI Grade', body: '1 or 2', },
                                { head: 'Base Oil Type', body: 'Mineral', },
                                { head: 'Base Oil Viscosity ', body: '70 cSt min ', },
                                { head: 'Thickener Type', body: 'Polyurea ', },
                                { head: 'Dropping Point, oC', body: '260   min', },
                                { head: 'EP & AW Properties', body: 'Yes ', },
                                { head: 'Operating Temperature', body: '-30 to 160C', },
                            ],
                        },
                        "icon": "/img/about/grease.png",
                        facilities: [
                            {
                                type: "Intermediate Bulk Containers ( IBC )",
                                subTitle: 'Typically 1,000 grams (264 gallons), but can range from 500 to 1,250 grams',
                                description: ' IBCs are large, reusable containers designed for bulk liquids, chemicals, and other materials. They are made from materials such as plastic, steel, or composite materials and often come in a cubic shape for efficient storage and transport.',
                                image: 'https://rctrips.com/assets/itinerary/radisson-hyland-hotel-1.jpeg'
                            },
                            {
                                type: "Drums",
                                subTitle: 'The standard drum in the petroleum industry holds 200 grams (also referred to as a 55-gallon drum in the U.S.)',
                                description: ' Drums are cylindrical containers made of steel or plastic, used for transporting liquids such as oil, lubricants, and other petrochemical products. Other drum capacities include **100 grams* (26 gallons) and smaller sizes like *30 grams*',
                                image: 'https://rctrips.com/assets/itinerary/led-china-4.jpeg'
                            },
                            {
                                type: "Pails",
                                subTitle: 'Typically 18-20 grams (around 5 gallons)',
                                description: 'Pails are small cylindrical containers, usually made of metal or plastic, used for packaging smaller amounts of petroleum products like lubricants or chemicals.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-2.jpg'
                            },
                            {
                                type: "Medium / Small sized containers",
                                subTitle: 'These containers can range from 1 to 50 grams',
                                description: 'They include cans, jugs, and other small packaging units designed for easier handling and distribution of lubricants, chemicals, or other petroleum products.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-3.jpg'
                            },
                        ]
                    },
                    {
                        "id": 2261223,
                        "title": "CLG Lithium Complex Long Life Grease",
                        "sid": "CLG-lithium-complex-long-life-grease",
                        "description": "These are high-performance premium lithium complex greases with NLGI 3 consistency having a smooth & homogeneous structure. These greases contain highly refined virgin base oils, Lithium Complex thickener, and performance booster additives with excellent mechanical and roll stabilities for providing long service life of over 80,000 Kms under ideal trial conditions. All these greases have high dropping points, excellent oxidation stability, and exhibit excellent performance in the 'Wheel Bearing Life Performance' test (ASTM D 3527). All these grades are designed to combat surface protection of bearings against rust, corrosion, and wear even under humid conditions. These products are recommended for highway/off-highway moderate to heavy-duty commercial vehicles.",
                        "benefits": [
                            {
                                "title": "Lithium Complex Thickener",
                                "content": "Provides enhanced stability and long service life with smooth, homogeneous structure."
                            },
                            {
                                "title": "High Dropping Point",
                                "content": "Features a high dropping point, ensuring performance under high-temperature conditions."
                            },
                            {
                                "title": "Excellent Oxidation Stability",
                                "content": "Offers excellent oxidation stability, maintaining performance over extended periods."
                            },
                            {
                                "title": "Long Service Life",
                                "content": "Designed to provide a long service life of over 80,000 Kms under ideal conditions."
                            },
                            {
                                "title": "Superior Rust and Corrosion Protection",
                                "content": "Protects against rust and corrosion, ensuring durability in humid conditions."
                            }
                        ],
                        "table": {
                            tableHead: ["#", "Appearance", "Smooth and Homogeneous"],
                            tableData: [
                                { head: 'NLGI Grade', body: '3', },
                                { head: 'Base Oil Type', body: 'Mineral', },
                                { head: 'Base Oil Viscosity  at 40oC,', body: '200 cSt min ', },
                                { head: 'Thickener Type', body: 'Polyurea ', },
                                { head: 'Dropping Point, oC', body: '250   min', },
                                { head: 'EP & AW Properties', body: 'Yes ', },
                                { head: 'Operating Temperature', body: '-20 to 140oC', },
                            ],
                        },
                        "icon": "/img/about/grease.png",
                        facilities: [
                            {
                                type: "Intermediate Bulk Containers ( IBC )",
                                subTitle: 'Typically 1,000 grams (264 gallons), but can range from 500 to 1,250 grams',
                                description: ' IBCs are large, reusable containers designed for bulk liquids, chemicals, and other materials. They are made from materials such as plastic, steel, or composite materials and often come in a cubic shape for efficient storage and transport.',
                                image: 'https://rctrips.com/assets/itinerary/radisson-hyland-hotel-1.jpeg'
                            },
                            {
                                type: "Drums",
                                subTitle: 'The standard drum in the petroleum industry holds 200 grams (also referred to as a 55-gallon drum in the U.S.)',
                                description: ' Drums are cylindrical containers made of steel or plastic, used for transporting liquids such as oil, lubricants, and other petrochemical products. Other drum capacities include **100 grams* (26 gallons) and smaller sizes like *30 grams*',
                                image: 'https://rctrips.com/assets/itinerary/led-china-4.jpeg'
                            },
                            {
                                type: "Pails",
                                subTitle: 'Typically 18-20 grams (around 5 gallons)',
                                description: 'Pails are small cylindrical containers, usually made of metal or plastic, used for packaging smaller amounts of petroleum products like lubricants or chemicals.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-2.jpg'
                            },
                            {
                                type: "Medium / Small sized containers",
                                subTitle: 'These containers can range from 1 to 50 grams',
                                description: 'They include cans, jugs, and other small packaging units designed for easier handling and distribution of lubricants, chemicals, or other petroleum products.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-3.jpg'
                            },
                        ]
                    },
                    {
                        "id": 2223423,
                        "title": "CLG Sparkle Grease",
                        "sid": "CLG-sparkle-grease",
                        "description": "These are based on unique Non-Lithium thickener chemistry. The properties of greases are similar to Lithium greases. Recommended applications: Can be used in place of lithium Non-EP/EP greases.",
                        "benefits": [
                            {
                                "title": "Non-Lithium Thickener Chemistry",
                                "content": "Utilizes a unique non-lithium thickener for applications where traditional lithium greases are not suitable."
                            },
                            {
                                "title": "Similar Properties to Lithium Greases",
                                "content": "Provides similar lubrication properties to lithium greases, making it a versatile alternative."
                            },
                            {
                                "title": "Flexible Application",
                                "content": "Can be used in place of non-EP/EP lithium greases, offering flexibility in various applications."
                            }
                        ],
                        "table": {
                            tableHead: ["#", "Appearance", "Smooth ,Shiny and Homogeneous"],
                            tableData: [
                                { head: 'NLGI Grade', body: '1 /2/3', },
                                { head: 'Base Oil Type', body: 'Mineral', },
                                { head: 'Base Oil Viscosity at 40oC', body: '100 min', },
                                { head: 'Thickener Type', body: 'Unique thickener chemistry ', },
                                { head: 'Dropping Point, oC', body: '175 min', },
                                { head: 'EP & AW Properties', body: 'Yes ( EP or Non EP) ', },
                                { head: 'Operating Temperature', body: '-20 to 120C', },
                            ],
                        },
                        "icon": "/img/about/grease.png",
                        facilities: [
                            {
                                type: "Intermediate Bulk Containers ( IBC )",
                                subTitle: 'Typically 1,000 grams (264 gallons), but can range from 500 to 1,250 grams',
                                description: ' IBCs are large, reusable containers designed for bulk liquids, chemicals, and other materials. They are made from materials such as plastic, steel, or composite materials and often come in a cubic shape for efficient storage and transport.',
                                image: 'https://rctrips.com/assets/itinerary/radisson-hyland-hotel-1.jpeg'
                            },
                            {
                                type: "Drums",
                                subTitle: 'The standard drum in the petroleum industry holds 200 grams (also referred to as a 55-gallon drum in the U.S.)',
                                description: ' Drums are cylindrical containers made of steel or plastic, used for transporting liquids such as oil, lubricants, and other petrochemical products. Other drum capacities include **100 grams* (26 gallons) and smaller sizes like *30 grams*',
                                image: 'https://rctrips.com/assets/itinerary/led-china-4.jpeg'
                            },
                            {
                                type: "Pails",
                                subTitle: 'Typically 18-20 grams (around 5 gallons)',
                                description: 'Pails are small cylindrical containers, usually made of metal or plastic, used for packaging smaller amounts of petroleum products like lubricants or chemicals.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-2.jpg'
                            },
                            {
                                type: "Medium / Small sized containers",
                                subTitle: 'These containers can range from 1 to 50 grams',
                                description: 'They include cans, jugs, and other small packaging units designed for easier handling and distribution of lubricants, chemicals, or other petroleum products.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-3.jpg'
                            },
                        ]
                    }

                ]
            },

            {
                id: 112,
                title: "Speciality Grease",
                sid: "speciality-grease",
                description: "Crusher Grease 2 is a high-performance grease designed for use in heavy-duty machinery. It offers excellent protection against extreme pressure and is ideal for use in crushers and other industrial equipment.",
                icon: "/img/about/grease.png",
                route: '/grease-list/',
                category: 'grease',
                brand: 'CLG',
                products: [
                    {
                        "id": 23423423,
                        "title": "CLG syn pu grease",
                        "sid": "CLG-syn-pu-grease",
                        "description": "CLG Polyurea Syn Greases are high performance greases that are often preferred choice for sealed-for-life applications. These greases have wide operating temperatures, inherent ant oxidative properties, high thermal stability and low bleed characteristics. The synthetic PU products made by using PAO oil and Ester Oils are available.",
                        "icon": "/img/about/grease.png",
                        "benefits": [
                            {
                                "title": "Wide Operating Temperature Range",
                                "content": "Suitable for applications in both high and low temperature environments."
                            },
                            {
                                "title": "Antioxidative Properties",
                                "content": "Inherently resists oxidation, ensuring long-term stability and performance."
                            },
                            {
                                "title": "High Thermal Stability",
                                "content": "Maintains performance even under high heat conditions."
                            },
                            {
                                "title": "Low Bleed Characteristics",
                                "content": "Minimizes leakage, maintaining lubrication performance over time."
                            }
                        ],
                        "table": {
                            "tableHead": ["#", "Appearance", "Smooth and Homogeneous "],
                            "tableData": [
                                { "head": "NLGI Grade", "body": "2" },
                                { "head": "Base Oil Type", "body": "PAO and Ester Oils" },
                                { "head": "Thickener Type", "body": "Polyurea" },
                                { "head": "Operating Temperature", "body": "-40 to 180°C" },
                                { "head": "Drop Point", "body": ">250°C" },
                                { "head": "Applications", "body": "Sealed-for-life bearings" }
                            ]
                        },
                        facilities: [
                            {
                                type: "Intermediate Bulk Containers ( IBC )",
                                subTitle: 'Typically 1,000 grams (264 gallons), but can range from 500 to 1,250 grams',
                                description: ' IBCs are large, reusable containers designed for bulk liquids, chemicals, and other materials. They are made from materials such as plastic, steel, or composite materials and often come in a cubic shape for efficient storage and transport.',
                                image: 'https://rctrips.com/assets/itinerary/radisson-hyland-hotel-1.jpeg'
                            },
                            {
                                type: "Drums",
                                subTitle: 'The standard drum in the petroleum industry holds 200 grams (also referred to as a 55-gallon drum in the U.S.)',
                                description: ' Drums are cylindrical containers made of steel or plastic, used for transporting liquids such as oil, lubricants, and other petrochemical products. Other drum capacities include **100 grams* (26 gallons) and smaller sizes like *30 grams*',
                                image: 'https://rctrips.com/assets/itinerary/led-china-4.jpeg'
                            },
                            {
                                type: "Pails",
                                subTitle: 'Typically 18-20 grams (around 5 gallons)',
                                description: 'Pails are small cylindrical containers, usually made of metal or plastic, used for packaging smaller amounts of petroleum products like lubricants or chemicals.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-2.jpg'
                            },
                            {
                                type: "Medium / Small sized containers",
                                subTitle: 'These containers can range from 1 to 50 grams',
                                description: 'They include cans, jugs, and other small packaging units designed for easier handling and distribution of lubricants, chemicals, or other petroleum products.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-3.jpg'
                            },
                        ]
                    },
                    {
                        "id": 123789427893,
                        "title": "CLG syn li grease",
                        "sid": "CLG-syn-li-grease",
                        "description": "CLG Syn Lithium Greases are high performance greases that are often preferred choice for wide temperature range applications from -40C to 130C. These greases have off white color, inherent anti oxidative properties, high thermal stability characteristics. The synthetic Lithium products made by using PAO oils have excellent pump ability.",
                        "icon": "/img/about/grease.png",
                        "benefits": [
                            {
                                "title": "Wide Temperature Range",
                                "content": "Operates effectively between -40C and 130C, making it suitable for various climates."
                            },
                            {
                                "title": "Antioxidative Properties",
                                "content": "Prevents oxidation, ensuring longevity."
                            },
                            {
                                "title": "High Thermal Stability",
                                "content": "Performs consistently in high heat conditions."
                            },
                            {
                                "title": "Excellent Pump Ability",
                                "content": "Flows easily even in low temperatures, providing consistent lubrication."
                            }
                        ],
                        "table": {
                            "tableHead": ["#", "Appearance", "Smooth and Homogeneous "],
                            "tableData": [
                                { "head": "NLGI Grade", "body": "2" },
                                { "head": "Base Oil Type", "body": "PAO" },
                                { "head": "Thickener Type", "body": "Lithium" },
                                { "head": "Operating Temperature", "body": "-40 to 130°C" },
                                { "head": "Drop Point", "body": ">180°C" },
                                { "head": "Applications", "body": "Wide temperature range applications" }
                            ]
                        },
                        facilities: [
                            {
                                type: "Intermediate Bulk Containers ( IBC )",
                                subTitle: 'Typically 1,000 grams (264 gallons), but can range from 500 to 1,250 grams',
                                description: ' IBCs are large, reusable containers designed for bulk liquids, chemicals, and other materials. They are made from materials such as plastic, steel, or composite materials and often come in a cubic shape for efficient storage and transport.',
                                image: 'https://rctrips.com/assets/itinerary/radisson-hyland-hotel-1.jpeg'
                            },
                            {
                                type: "Drums",
                                subTitle: 'The standard drum in the petroleum industry holds 200 grams (also referred to as a 55-gallon drum in the U.S.)',
                                description: ' Drums are cylindrical containers made of steel or plastic, used for transporting liquids such as oil, lubricants, and other petrochemical products. Other drum capacities include **100 grams* (26 gallons) and smaller sizes like *30 grams*',
                                image: 'https://rctrips.com/assets/itinerary/led-china-4.jpeg'
                            },
                            {
                                type: "Pails",
                                subTitle: 'Typically 18-20 grams (around 5 gallons)',
                                description: 'Pails are small cylindrical containers, usually made of metal or plastic, used for packaging smaller amounts of petroleum products like lubricants or chemicals.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-2.jpg'
                            },
                            {
                                type: "Medium / Small sized containers",
                                subTitle: 'These containers can range from 1 to 50 grams',
                                description: 'They include cans, jugs, and other small packaging units designed for easier handling and distribution of lubricants, chemicals, or other petroleum products.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-3.jpg'
                            },
                        ]
                    },
                    {
                        "id": 122312312445,
                        "title": "CLG syn lc grease",
                        "sid": "CLG-syn-lc-grease",
                        "description": "CLG Syn Lithium Complex Greases are high performance greases that are often preferred choice for wide temperature range applications from -40C to 160C. These greases have off white colour, inherent anti oxidative properties, high thermal stability characteristics. The synthetic Lithium products made by using PAO oils have excellent low temperature pump ability.",
                        "icon": "/img/about/grease.png",
                        "benefits": [
                            {
                                "title": "Wide Temperature Range",
                                "content": "Performs well in temperatures from -40C to 160C, ideal for diverse conditions."
                            },
                            {
                                "title": "Antioxidative Properties",
                                "content": "Resists oxidation, preserving grease performance over time."
                            },
                            {
                                "title": "High Thermal Stability",
                                "content": "Maintains stability and performance in high-temperature environments."
                            },
                            {
                                "title": "Low Temperature Pump Ability",
                                "content": "Flows easily at low temperatures, ensuring efficient lubrication."
                            }
                        ],
                        "table": {
                            "tableHead": ["#", "Appearance", "Smooth and Homogeneous "],
                            "tableData": [
                                { "head": "NLGI Grade", "body": "2" },
                                { "head": "Base Oil Type", "body": "PAO" },
                                { "head": "Thickener Type", "body": "Lithium Complex" },
                                { "head": "Operating Temperature", "body": "-40 to 160°C" },
                                { "head": "Drop Point", "body": ">250°C" },
                                { "head": "Applications", "body": "Wide temperature range, high stability" }
                            ]
                        },
                        facilities: [
                            {
                                type: "Intermediate Bulk Containers ( IBC )",
                                subTitle: 'Typically 1,000 grams (264 gallons), but can range from 500 to 1,250 grams',
                                description: ' IBCs are large, reusable containers designed for bulk liquids, chemicals, and other materials. They are made from materials such as plastic, steel, or composite materials and often come in a cubic shape for efficient storage and transport.',
                                image: 'https://rctrips.com/assets/itinerary/radisson-hyland-hotel-1.jpeg'
                            },
                            {
                                type: "Drums",
                                subTitle: 'The standard drum in the petroleum industry holds 200 grams (also referred to as a 55-gallon drum in the U.S.)',
                                description: ' Drums are cylindrical containers made of steel or plastic, used for transporting liquids such as oil, lubricants, and other petrochemical products. Other drum capacities include **100 grams* (26 gallons) and smaller sizes like *30 grams*',
                                image: 'https://rctrips.com/assets/itinerary/led-china-4.jpeg'
                            },
                            {
                                type: "Pails",
                                subTitle: 'Typically 18-20 grams (around 5 gallons)',
                                description: 'Pails are small cylindrical containers, usually made of metal or plastic, used for packaging smaller amounts of petroleum products like lubricants or chemicals.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-2.jpg'
                            },
                            {
                                type: "Medium / Small sized containers",
                                subTitle: 'These containers can range from 1 to 50 grams',
                                description: 'They include cans, jugs, and other small packaging units designed for easier handling and distribution of lubricants, chemicals, or other petroleum products.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-3.jpg'
                            },
                        ]
                    },
                    {
                        "id": 978988888,
                        "title": "CLG syn bentone grease",
                        "sid": "CLG-syn-bentone-grease",
                        "description": "CLG Bentone Grease is brown coloured grease formulated by using organo modified clay, highly refined synthetic PAO, anti-oxidant, EP, anti-rust additives covering wide range operating service temperature from -40 to +200°C. The product is available with Moly also designed to combat highly stringent operating conditions.",
                        "icon": "/img/about/grease.png",
                        "benefits": [
                            {
                                "title": "High Temperature Performance",
                                "content": "Covers a wide range of operating temperatures from -40 to +200°C."
                            },
                            {
                                "title": "Antioxidant and Anti-Rust Additives",
                                "content": "Incorporates additives that protect against rust and oxidation, extending the product's life."
                            },
                            {
                                "title": "Enhanced with Moly",
                                "content": "Available with Molybdenum for extreme pressure and heavy-duty applications."
                            },
                            {
                                "title": "Organo Modified Clay",
                                "content": "Formulated with advanced clay thickening for better performance."
                            }
                        ],
                        "table": {
                            "tableHead": ["#", "Appearance", "Smooth and Homogeneous "],
                            "tableData": [
                                { "head": "NLGI Grade", "body": "2" },
                                { "head": "Base Oil Type", "body": "PAO" },
                                { "head": "Thickener Type", "body": "Bentone (Clay)" },
                                { "head": "Operating Temperature", "body": "-40 to 200°C" },
                                { "head": "Drop Point", "body": "Non-Melting" },
                                { "head": "Applications", "body": "Heavy-duty, high-temperature applications" }
                            ]
                        },
                        facilities: [
                            {
                                type: "Intermediate Bulk Containers ( IBC )",
                                subTitle: 'Typically 1,000 grams (264 gallons), but can range from 500 to 1,250 grams',
                                description: ' IBCs are large, reusable containers designed for bulk liquids, chemicals, and other materials. They are made from materials such as plastic, steel, or composite materials and often come in a cubic shape for efficient storage and transport.',
                                image: 'https://rctrips.com/assets/itinerary/radisson-hyland-hotel-1.jpeg'
                            },
                            {
                                type: "Drums",
                                subTitle: 'The standard drum in the petroleum industry holds 200 grams (also referred to as a 55-gallon drum in the U.S.)',
                                description: ' Drums are cylindrical containers made of steel or plastic, used for transporting liquids such as oil, lubricants, and other petrochemical products. Other drum capacities include **100 grams* (26 gallons) and smaller sizes like *30 grams*',
                                image: 'https://rctrips.com/assets/itinerary/led-china-4.jpeg'
                            },
                            {
                                type: "Pails",
                                subTitle: 'Typically 18-20 grams (around 5 gallons)',
                                description: 'Pails are small cylindrical containers, usually made of metal or plastic, used for packaging smaller amounts of petroleum products like lubricants or chemicals.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-2.jpg'
                            },
                            {
                                type: "Medium / Small sized containers",
                                subTitle: 'These containers can range from 1 to 50 grams',
                                description: 'They include cans, jugs, and other small packaging units designed for easier handling and distribution of lubricants, chemicals, or other petroleum products.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-3.jpg'
                            },
                        ]
                    },
                    {
                        "id": 1234234234652456,
                        "title": "CLG STEERING Grease",
                        "sid": "CLG-steering-grease",
                        "description": "CLG STEERING Grease is formulated by using unique thickener and synthetic oil covering very wide range operating service temperature from -60 to +250°C. This grease is normally recommended for life time application in steerings.",
                        "icon": "/img/about/grease.png",
                        "benefits": [
                            {
                                "title": "Wide Temperature Range",
                                "content": "Performs well across a broad temperature range from -60 to +250°C."
                            },
                            {
                                "title": "Unique Thickener",
                                "content": "Formulated with a special thickener for lifetime lubrication in steering systems."
                            },
                            {
                                "title": "Synthetic Oil Base",
                                "content": "Utilizes synthetic oils for high performance and durability."
                            }
                        ],
                        "table": {
                            "tableHead": ["#", "Appearance", "Smooth and Homogeneous "],
                            "tableData": [
                                { "head": "NLGI Grade", "body": "2" },
                                { "head": "Base Oil Type", "body": "Synthetic" },
                                { "head": "Thickener Type", "body": "Unique Thickener" },
                                { "head": "Operating Temperature", "body": "-60 to 250°C" },
                                { "head": "Applications", "body": "Steering systems" }
                            ]
                        },
                        facilities: [
                            {
                                type: "Intermediate Bulk Containers ( IBC )",
                                subTitle: 'Typically 1,000 grams (264 gallons), but can range from 500 to 1,250 grams',
                                description: ' IBCs are large, reusable containers designed for bulk liquids, chemicals, and other materials. They are made from materials such as plastic, steel, or composite materials and often come in a cubic shape for efficient storage and transport.',
                                image: 'https://rctrips.com/assets/itinerary/radisson-hyland-hotel-1.jpeg'
                            },
                            {
                                type: "Drums",
                                subTitle: 'The standard drum in the petroleum industry holds 200 grams (also referred to as a 55-gallon drum in the U.S.)',
                                description: ' Drums are cylindrical containers made of steel or plastic, used for transporting liquids such as oil, lubricants, and other petrochemical products. Other drum capacities include **100 grams* (26 gallons) and smaller sizes like *30 grams*',
                                image: 'https://rctrips.com/assets/itinerary/led-china-4.jpeg'
                            },
                            {
                                type: "Pails",
                                subTitle: 'Typically 18-20 grams (around 5 gallons)',
                                description: 'Pails are small cylindrical containers, usually made of metal or plastic, used for packaging smaller amounts of petroleum products like lubricants or chemicals.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-2.jpg'
                            },
                            {
                                type: "Medium / Small sized containers",
                                subTitle: 'These containers can range from 1 to 50 grams',
                                description: 'They include cans, jugs, and other small packaging units designed for easier handling and distribution of lubricants, chemicals, or other petroleum products.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-3.jpg'
                            },
                        ]
                    },
                    {
                        "id": 789745409876543,
                        "title": "CLG fire resistance grease",
                        "sid": "CLG-fire-resistance-grease",
                        "description": "In Steel industry, there are certain segments where specialty greases like fire resistant greases are required. These are also known as self-extinguishing greases which catch fire but fire stops to propagate further within seconds and the costly bearing are saved. The composition of grease is designed so that it contributes to extinguish fire by selecting special thickener and base oil that controls fire by reducing availability of oxygen.",
                        "icon": "/img/about/grease.png",
                        "benefits": [
                            {
                                "title": "Fire Resistant",
                                "content": "Self-extinguishing properties that prevent the spread of fire."
                            },
                            {
                                "title": "Protects Bearings",
                                "content": "Ensures protection of expensive bearings by stopping fire propagation."
                            },
                            {
                                "title": "Special Thickener and Base Oil",
                                "content": "Formulated to reduce oxygen availability, controlling fire effectively."
                            }
                        ],
                        "table": {
                            "tableHead": ["#", "Appearance", "Smooth and Homogeneous "],
                            "tableData": [
                                { "head": "NLGI Grade", "body": "2" },
                                { "head": "Base Oil Type", "body": "Specially Formulated" },
                                { "head": "Thickener Type", "body": "Fire Resistant Additives" },
                                { "head": "Operating Temperature", "body": "-40 to 200°C" },
                                { "head": "Applications", "body": "Steel industry, fire-prone areas" }
                            ]
                        },
                        facilities: [
                            {
                                type: "Intermediate Bulk Containers ( IBC )",
                                subTitle: 'Typically 1,000 grams (264 gallons), but can range from 500 to 1,250 grams',
                                description: ' IBCs are large, reusable containers designed for bulk liquids, chemicals, and other materials. They are made from materials such as plastic, steel, or composite materials and often come in a cubic shape for efficient storage and transport.',
                                image: 'https://rctrips.com/assets/itinerary/radisson-hyland-hotel-1.jpeg'
                            },
                            {
                                type: "Drums",
                                subTitle: 'The standard drum in the petroleum industry holds 200 grams (also referred to as a 55-gallon drum in the U.S.)',
                                description: ' Drums are cylindrical containers made of steel or plastic, used for transporting liquids such as oil, lubricants, and other petrochemical products. Other drum capacities include **100 grams* (26 gallons) and smaller sizes like *30 grams*',
                                image: 'https://rctrips.com/assets/itinerary/led-china-4.jpeg'
                            },
                            {
                                type: "Pails",
                                subTitle: 'Typically 18-20 grams (around 5 gallons)',
                                description: 'Pails are small cylindrical containers, usually made of metal or plastic, used for packaging smaller amounts of petroleum products like lubricants or chemicals.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-2.jpg'
                            },
                            {
                                type: "Medium / Small sized containers",
                                subTitle: 'These containers can range from 1 to 50 grams',
                                description: 'They include cans, jugs, and other small packaging units designed for easier handling and distribution of lubricants, chemicals, or other petroleum products.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-3.jpg'
                            },
                        ]
                    },
                    {
                        "id": 4564565234,
                        "title": "CLG li-ca grease (vg 220, vg 320 and vg 460)",
                        "sid": "CLG-li-ca-grease-vg-220-vg-320-and-vg-460",
                        "description": "Lithium and Calcium mixed soap-based greases are widely used in automotive and industrial applications, where high resistance against water contamination is needed. Products are available as non-EP greases for applications under low to medium loads and EP (extreme pressure) greases for applications under high load conditions. Produced in NLGI consistency grades from NLGI 1 to NLGI 3 in several VG grade oils.",
                        "icon": "/img/about/grease.png",
                        "benefits": [
                            {
                                "title": "Water Resistance",
                                "content": "Provides high resistance against water contamination, ideal for automotive and industrial use."
                            },
                            {
                                "title": "Available in EP and Non-EP Grades",
                                "content": "Offered in both EP (extreme pressure) and non-EP variants for different load conditions."
                            },
                            {
                                "title": "Wide Range of Viscosity Grades",
                                "content": "Available in VG 220, VG 320, and VG 460 grades, suitable for various applications."
                            }
                        ],
                        "table": {
                            "tableHead": ["#", "Appearance", "Smooth and Homogeneous "],
                            "tableData": [
                                { "head": "NLGI Grade", "body": "1 to 3" },
                                { "head": "Base Oil Type", "body": "Mineral" },
                                { "head": "Thickener Type", "body": "Lithium-Calcium" },
                                { "head": "Operating Temperature", "body": "-20 to 130°C" },
                                { "head": "Viscosity Grades", "body": "VG 220, VG 320, VG 460" },
                                { "head": "Applications", "body": "Automotive, industrial, water resistance" }
                            ]
                        },
                        facilities: [
                            {
                                type: "Intermediate Bulk Containers ( IBC )",
                                subTitle: 'Typically 1,000 grams (264 gallons), but can range from 500 to 1,250 grams',
                                description: ' IBCs are large, reusable containers designed for bulk liquids, chemicals, and other materials. They are made from materials such as plastic, steel, or composite materials and often come in a cubic shape for efficient storage and transport.',
                                image: 'https://rctrips.com/assets/itinerary/radisson-hyland-hotel-1.jpeg'
                            },
                            {
                                type: "Drums",
                                subTitle: 'The standard drum in the petroleum industry holds 200 grams (also referred to as a 55-gallon drum in the U.S.)',
                                description: ' Drums are cylindrical containers made of steel or plastic, used for transporting liquids such as oil, lubricants, and other petrochemical products. Other drum capacities include **100 grams* (26 gallons) and smaller sizes like *30 grams*',
                                image: 'https://rctrips.com/assets/itinerary/led-china-4.jpeg'
                            },
                            {
                                type: "Pails",
                                subTitle: 'Typically 18-20 grams (around 5 gallons)',
                                description: 'Pails are small cylindrical containers, usually made of metal or plastic, used for packaging smaller amounts of petroleum products like lubricants or chemicals.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-2.jpg'
                            },
                            {
                                type: "Medium / Small sized containers",
                                subTitle: 'These containers can range from 1 to 50 grams',
                                description: 'They include cans, jugs, and other small packaging units designed for easier handling and distribution of lubricants, chemicals, or other petroleum products.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-3.jpg'
                            },
                        ]
                    }
                ]

            },
            {
                id: 223,
                title: "Specification based Grease",
                sid: "specification-based-grease",
                description: "The Crusher Grease Test Report provides detailed analysis and performance evaluations of Crusher Grease, highlighting its ability to withstand high pressures and protect machinery components.",
                icon: "/img/about/grease.png",
                route: '/grease-list/',
                category: 'grease',
                brand: 'CLG',
                products: [
                    {
                        "id": 5577899,
                        "title": "IS: 7623 industrial lithium regular grease",
                        "sid": "is-7623-industrial-lithium-regular-grease",
                        "description": "It is Industrial Purpose Lithium Regular Type Grease available in NLGI Grade 1, 2 and 3.",
                        "icon": "/img/about/grease.png",
                        "benefits": [
                            {
                                "title": "Versatile Industrial Use",
                                "content": "Ideal for various industrial applications."
                            },
                            {
                                "title": "Multiple NLGI Grades",
                                "content": "Available in NLGI Grade 1, 2, and 3 for diverse needs."
                            },
                            {
                                "title": "Reliable Performance",
                                "content": "Provides consistent lubrication under standard operating conditions."
                            }
                        ],
                        "table": {
                            "tableHead": ["#", "Appearance", "Smooth and Homogeneous "],
                            "tableData": [
                                { "head": "NLGI Grade", "body": "1, 2, 3" },
                                { "head": "Base Oil Type", "body": "Mineral" },
                                { "head": "Thickener Type", "body": "Lithium" },
                                { "head": "Operating Temperature", "body": "-20 to 130°C" },
                                { "head": "Applications", "body": "General industrial purpose" }
                            ]
                        },
                        facilities: [
                            {
                                type: "Intermediate Bulk Containers ( IBC )",
                                subTitle: 'Typically 1,000 grams (264 gallons), but can range from 500 to 1,250 grams',
                                description: ' IBCs are large, reusable containers designed for bulk liquids, chemicals, and other materials. They are made from materials such as plastic, steel, or composite materials and often come in a cubic shape for efficient storage and transport.',
                                image: 'https://rctrips.com/assets/itinerary/radisson-hyland-hotel-1.jpeg'
                            },
                            {
                                type: "Drums",
                                subTitle: 'The standard drum in the petroleum industry holds 200 grams (also referred to as a 55-gallon drum in the U.S.)',
                                description: ' Drums are cylindrical containers made of steel or plastic, used for transporting liquids such as oil, lubricants, and other petrochemical products. Other drum capacities include **100 grams* (26 gallons) and smaller sizes like *30 grams*',
                                image: 'https://rctrips.com/assets/itinerary/led-china-4.jpeg'
                            },
                            {
                                type: "Pails",
                                subTitle: 'Typically 18-20 grams (around 5 gallons)',
                                description: 'Pails are small cylindrical containers, usually made of metal or plastic, used for packaging smaller amounts of petroleum products like lubricants or chemicals.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-2.jpg'
                            },
                            {
                                type: "Medium / Small sized containers",
                                subTitle: 'These containers can range from 1 to 50 grams',
                                description: 'They include cans, jugs, and other small packaging units designed for easier handling and distribution of lubricants, chemicals, or other petroleum products.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-3.jpg'
                            },
                        ]
                    },
                    {
                        "id": 442345345,
                        "title": "IS: 7623 industrial lithium ep grease",
                        "sid": "is-7623-industrial-lithium-ep-grease",
                        "description": "It is Lithium Industrial Purpose EP Type Grease available in NLGI Grade 1, 2, and 3. Physico-chemical properties.",
                        "icon": "/img/about/grease.png",
                        "benefits": [
                            {
                                "title": "Extreme Pressure Resistance",
                                "content": "Formulated to withstand high pressure applications."
                            },
                            {
                                "title": "Available in Multiple Grades",
                                "content": "Comes in NLGI Grade 1, 2, and 3 for specific requirements."
                            },
                            {
                                "title": "Physico-Chemical Stability",
                                "content": "Stable under various chemical and physical conditions."
                            }
                        ],
                        "table": {
                            "tableHead": ["#", "Appearance", "Smooth and Homogeneous "],
                            "tableData": [
                                { "head": "NLGI Grade", "body": "1, 2, 3" },
                                { "head": "Base Oil Type", "body": "Mineral" },
                                { "head": "Thickener Type", "body": "Lithium EP" },
                                { "head": "Operating Temperature", "body": "-20 to 130°C" },
                                { "head": "EP Properties", "body": "Yes" },
                                { "head": "Applications", "body": "High-pressure industrial applications" }
                            ]
                        },
                        facilities: [
                            {
                                type: "Intermediate Bulk Containers ( IBC )",
                                subTitle: 'Typically 1,000 grams (264 gallons), but can range from 500 to 1,250 grams',
                                description: ' IBCs are large, reusable containers designed for bulk liquids, chemicals, and other materials. They are made from materials such as plastic, steel, or composite materials and often come in a cubic shape for efficient storage and transport.',
                                image: 'https://rctrips.com/assets/itinerary/radisson-hyland-hotel-1.jpeg'
                            },
                            {
                                type: "Drums",
                                subTitle: 'The standard drum in the petroleum industry holds 200 grams (also referred to as a 55-gallon drum in the U.S.)',
                                description: ' Drums are cylindrical containers made of steel or plastic, used for transporting liquids such as oil, lubricants, and other petrochemical products. Other drum capacities include **100 grams* (26 gallons) and smaller sizes like *30 grams*',
                                image: 'https://rctrips.com/assets/itinerary/led-china-4.jpeg'
                            },
                            {
                                type: "Pails",
                                subTitle: 'Typically 18-20 grams (around 5 gallons)',
                                description: 'Pails are small cylindrical containers, usually made of metal or plastic, used for packaging smaller amounts of petroleum products like lubricants or chemicals.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-2.jpg'
                            },
                            {
                                type: "Medium / Small sized containers",
                                subTitle: 'These containers can range from 1 to 50 grams',
                                description: 'They include cans, jugs, and other small packaging units designed for easier handling and distribution of lubricants, chemicals, or other petroleum products.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-3.jpg'
                            },
                        ]
                    },
                    {
                        "id": 112309,
                        "title": "IS: 2203",
                        "sid": "is-2203",
                        "description": "It is Lithium Automotive Purpose Grease available in NLGI Grade 1, 2, and 3.",
                        "icon": "/img/about/grease.png",
                        "benefits": [
                            {
                                "title": "Automotive Specific",
                                "content": "Designed for automotive lubrication requirements."
                            },
                            {
                                "title": "Multiple NLGI Grades",
                                "content": "Offered in NLGI Grade 1, 2, and 3 for different automotive applications."
                            },
                            {
                                "title": "High Durability",
                                "content": "Ensures long-lasting performance in automotive parts."
                            }
                        ],
                        "table": {
                            "tableHead": ["#", "Appearance", "Smooth and Homogeneous "],
                            "tableData": [
                                { "head": "NLGI Grade", "body": "1, 2, 3" },
                                { "head": "Base Oil Type", "body": "Mineral" },
                                { "head": "Thickener Type", "body": "Lithium" },
                                { "head": "Operating Temperature", "body": "-20 to 130°C" },
                                { "head": "Applications", "body": "Automotive purpose" }
                            ]
                        },
                        facilities: [
                            {
                                type: "Intermediate Bulk Containers ( IBC )",
                                subTitle: 'Typically 1,000 grams (264 gallons), but can range from 500 to 1,250 grams',
                                description: ' IBCs are large, reusable containers designed for bulk liquids, chemicals, and other materials. They are made from materials such as plastic, steel, or composite materials and often come in a cubic shape for efficient storage and transport.',
                                image: 'https://rctrips.com/assets/itinerary/radisson-hyland-hotel-1.jpeg'
                            },
                            {
                                type: "Drums",
                                subTitle: 'The standard drum in the petroleum industry holds 200 grams (also referred to as a 55-gallon drum in the U.S.)',
                                description: ' Drums are cylindrical containers made of steel or plastic, used for transporting liquids such as oil, lubricants, and other petrochemical products. Other drum capacities include **100 grams* (26 gallons) and smaller sizes like *30 grams*',
                                image: 'https://rctrips.com/assets/itinerary/led-china-4.jpeg'
                            },
                            {
                                type: "Pails",
                                subTitle: 'Typically 18-20 grams (around 5 gallons)',
                                description: 'Pails are small cylindrical containers, usually made of metal or plastic, used for packaging smaller amounts of petroleum products like lubricants or chemicals.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-2.jpg'
                            },
                            {
                                type: "Medium / Small sized containers",
                                subTitle: 'These containers can range from 1 to 50 grams',
                                description: 'They include cans, jugs, and other small packaging units designed for easier handling and distribution of lubricants, chemicals, or other petroleum products.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-3.jpg'
                            },
                        ]
                    },
                    {
                        "id": 1001,
                        "title": "JS: 8030",
                        "sid": "js-8030",
                        "description": "CLG PROTECTIVE PX 6 meeting JSS 8030 specification.",
                        "icon": "/img/about/grease.png",
                        "benefits": [
                            {
                                "title": "Meets JSS 8030 Specification",
                                "content": "Designed to meet stringent protective grease standards."
                            },
                            {
                                "title": "High Protection",
                                "content": "Provides exceptional protection for parts under extreme conditions."
                            },
                            {
                                "title": "Durability",
                                "content": "Long-lasting performance in tough environments."
                            }
                        ],
                        "table": {
                            "tableHead": ["#", "Appearance", "Smooth and Homogeneous "],
                            "tableData": [
                                { "head": "NLGI Grade", "body": "PX 6" },
                                { "head": "Base Oil Type", "body": "Synthetic" },
                                { "head": "Thickener Type", "body": "Complex" },
                                { "head": "Operating Temperature", "body": "-30 to 180°C" },
                                { "head": "Applications", "body": "Protective applications" }
                            ]
                        },
                        facilities: [
                            {
                                type: "Intermediate Bulk Containers ( IBC )",
                                subTitle: 'Typically 1,000 grams (264 gallons), but can range from 500 to 1,250 grams',
                                description: ' IBCs are large, reusable containers designed for bulk liquids, chemicals, and other materials. They are made from materials such as plastic, steel, or composite materials and often come in a cubic shape for efficient storage and transport.',
                                image: 'https://rctrips.com/assets/itinerary/radisson-hyland-hotel-1.jpeg'
                            },
                            {
                                type: "Drums",
                                subTitle: 'The standard drum in the petroleum industry holds 200 grams (also referred to as a 55-gallon drum in the U.S.)',
                                description: ' Drums are cylindrical containers made of steel or plastic, used for transporting liquids such as oil, lubricants, and other petrochemical products. Other drum capacities include **100 grams* (26 gallons) and smaller sizes like *30 grams*',
                                image: 'https://rctrips.com/assets/itinerary/led-china-4.jpeg'
                            },
                            {
                                type: "Pails",
                                subTitle: 'Typically 18-20 grams (around 5 gallons)',
                                description: 'Pails are small cylindrical containers, usually made of metal or plastic, used for packaging smaller amounts of petroleum products like lubricants or chemicals.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-2.jpg'
                            },
                            {
                                type: "Medium / Small sized containers",
                                subTitle: 'These containers can range from 1 to 50 grams',
                                description: 'They include cans, jugs, and other small packaging units designed for easier handling and distribution of lubricants, chemicals, or other petroleum products.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-3.jpg'
                            },
                        ]
                    },
                    {
                        "id": 99630,
                        "title": "IS: 507",
                        "sid": "is-507",
                        "description": "CLG LG 280 & CLG 320 meeting IS:507 specification.",
                        "icon": "/img/about/grease.png",
                        "benefits": [
                            {
                                "title": "Meets IS: 507 Specification",
                                "content": "Compliant with industry standard IS: 507 for industrial lubricants."
                            },
                            {
                                "title": "Wide Temperature Range",
                                "content": "Performs well across a wide range of temperatures."
                            },
                            {
                                "title": "High Stability",
                                "content": "Provides long-lasting lubrication stability."
                            }
                        ],
                        "table": {
                            "tableHead": ["#", "Appearance", "Smooth and Homogeneous "],
                            "tableData": [
                                { "head": "NLGI Grade", "body": "LG 280 & LG 320" },
                                { "head": "Base Oil Type", "body": "Mineral" },
                                { "head": "Thickener Type", "body": "Lithium" },
                                { "head": "Operating Temperature", "body": "-20 to 150°C" },
                                { "head": "Applications", "body": "Industrial applications" }
                            ]
                        },
                        facilities: [
                            {
                                type: "Intermediate Bulk Containers ( IBC )",
                                subTitle: 'Typically 1,000 grams (264 gallons), but can range from 500 to 1,250 grams',
                                description: ' IBCs are large, reusable containers designed for bulk liquids, chemicals, and other materials. They are made from materials such as plastic, steel, or composite materials and often come in a cubic shape for efficient storage and transport.',
                                image: 'https://rctrips.com/assets/itinerary/radisson-hyland-hotel-1.jpeg'
                            },
                            {
                                type: "Drums",
                                subTitle: 'The standard drum in the petroleum industry holds 200 grams (also referred to as a 55-gallon drum in the U.S.)',
                                description: ' Drums are cylindrical containers made of steel or plastic, used for transporting liquids such as oil, lubricants, and other petrochemical products. Other drum capacities include **100 grams* (26 gallons) and smaller sizes like *30 grams*',
                                image: 'https://rctrips.com/assets/itinerary/led-china-4.jpeg'
                            },
                            {
                                type: "Pails",
                                subTitle: 'Typically 18-20 grams (around 5 gallons)',
                                description: 'Pails are small cylindrical containers, usually made of metal or plastic, used for packaging smaller amounts of petroleum products like lubricants or chemicals.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-2.jpg'
                            },
                            {
                                type: "Medium / Small sized containers",
                                subTitle: 'These containers can range from 1 to 50 grams',
                                description: 'They include cans, jugs, and other small packaging units designed for easier handling and distribution of lubricants, chemicals, or other petroleum products.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-3.jpg'
                            },
                        ]
                    },
                    {
                        "id": 448890,
                        "title": "gclb",
                        "sid": "gclb",
                        "description": "CLG TPAG Grease meeting GCLB specification.",
                        "icon": "/img/about/grease.png",
                        "benefits": [
                            {
                                "title": "Meets GCLB Specification",
                                "content": "Compliant with GCLB standards for high-performance greases."
                            },
                            {
                                "title": "Excellent Load Bearing",
                                "content": "Supports high loads, making it ideal for tough industrial applications."
                            },
                            {
                                "title": "Durable",
                                "content": "Ensures long-lasting lubrication in demanding environments."
                            }
                        ],
                        "table": {
                            "tableHead": ["#", "Appearance", "Smooth and Homogeneous "],
                            "tableData": [
                                { "head": "NLGI Grade", "body": "2" },
                                { "head": "Base Oil Type", "body": "Synthetic" },
                                { "head": "Thickener Type", "body": "Complex" },
                                { "head": "Operating Temperature", "body": "-30 to 180°C" },
                                { "head": "Applications", "body": "Heavy load applications" }
                            ]
                        },
                        facilities: [
                            {
                                type: "Intermediate Bulk Containers ( IBC )",
                                subTitle: 'Typically 1,000 grams (264 gallons), but can range from 500 to 1,250 grams',
                                description: ' IBCs are large, reusable containers designed for bulk liquids, chemicals, and other materials. They are made from materials such as plastic, steel, or composite materials and often come in a cubic shape for efficient storage and transport.',
                                image: 'https://rctrips.com/assets/itinerary/radisson-hyland-hotel-1.jpeg'
                            },
                            {
                                type: "Drums",
                                subTitle: 'The standard drum in the petroleum industry holds 200 grams (also referred to as a 55-gallon drum in the U.S.)',
                                description: ' Drums are cylindrical containers made of steel or plastic, used for transporting liquids such as oil, lubricants, and other petrochemical products. Other drum capacities include **100 grams* (26 gallons) and smaller sizes like *30 grams*',
                                image: 'https://rctrips.com/assets/itinerary/led-china-4.jpeg'
                            },
                            {
                                type: "Pails",
                                subTitle: 'Typically 18-20 grams (around 5 gallons)',
                                description: 'Pails are small cylindrical containers, usually made of metal or plastic, used for packaging smaller amounts of petroleum products like lubricants or chemicals.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-2.jpg'
                            },
                            {
                                type: "Medium / Small sized containers",
                                subTitle: 'These containers can range from 1 to 50 grams',
                                description: 'They include cans, jugs, and other small packaging units designed for easier handling and distribution of lubricants, chemicals, or other petroleum products.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-3.jpg'
                            },
                        ]
                    },
                    {
                        "id": 9902245,
                        "title": "aarm 942",
                        "sid": "aarm-942",
                        "description": "CLG Rail Road Grease 3 meeting AAR M 942 specification.",
                        "icon": "/img/about/grease.png",
                        "benefits": [
                            {
                                "title": "AAR M 942 Compliant",
                                "content": "Meets railroad grease standards for high-performance."
                            },
                            {
                                "title": "Designed for Railroads",
                                "content": "Specifically formulated for railroad applications."
                            },
                            {
                                "title": "Extreme Pressure Resistance",
                                "content": "Built to handle high-pressure, high-friction environments."
                            }
                        ],
                        "table": {
                            "tableHead": ["#", "Appearance", "Smooth and Homogeneous "],
                            "tableData": [
                                { "head": "NLGI Grade", "body": "3" },
                                { "head": "Base Oil Type", "body": "Mineral" },
                                { "head": "Thickener Type", "body": "Lithium" },
                                { "head": "Operating Temperature", "body": "-30 to 120°C" },
                                { "head": "EP Properties", "body": "Yes" },
                                { "head": "Applications", "body": "Railroad applications" }
                            ]
                        },
                        facilities: [
                            {
                                type: "Intermediate Bulk Containers ( IBC )",
                                subTitle: 'Typically 1,000 grams (264 gallons), but can range from 500 to 1,250 grams',
                                description: ' IBCs are large, reusable containers designed for bulk liquids, chemicals, and other materials. They are made from materials such as plastic, steel, or composite materials and often come in a cubic shape for efficient storage and transport.',
                                image: 'https://rctrips.com/assets/itinerary/radisson-hyland-hotel-1.jpeg'
                            },
                            {
                                type: "Drums",
                                subTitle: 'The standard drum in the petroleum industry holds 200 grams (also referred to as a 55-gallon drum in the U.S.)',
                                description: ' Drums are cylindrical containers made of steel or plastic, used for transporting liquids such as oil, lubricants, and other petrochemical products. Other drum capacities include **100 grams* (26 gallons) and smaller sizes like *30 grams*',
                                image: 'https://rctrips.com/assets/itinerary/led-china-4.jpeg'
                            },
                            {
                                type: "Pails",
                                subTitle: 'Typically 18-20 grams (around 5 gallons)',
                                description: 'Pails are small cylindrical containers, usually made of metal or plastic, used for packaging smaller amounts of petroleum products like lubricants or chemicals.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-2.jpg'
                            },
                            {
                                type: "Medium / Small sized containers",
                                subTitle: 'These containers can range from 1 to 50 grams',
                                description: 'They include cans, jugs, and other small packaging units designed for easier handling and distribution of lubricants, chemicals, or other petroleum products.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-3.jpg'
                            },
                        ]
                    }
                ]
            },

        ],
        oils: [
            {
                id: 445234,
                "title": "Automotive lubricating oils",
                sid: "automotive-lubricating-oils",
                "description": "AP-3 Grease is a high-performance grease known for its superior lubrication properties. It is ideal for automotive and industrial applications, providing excellent resistance to water and corrosion.",
                "icon": "/img/about/oil.png",
                route: '/oil-list/',
                category: 'oils',
                brand: 'CLG',
                products: [
                    {
                        "id": 110022,
                        "title": "CLG CF-4 engine oil",
                        "sid": "CLG-cf-4-engine-oil",
                        "description": "These are premium quality commercial multipurpose diesel engine oil. Oil meets CF-4 service classification for modern and low emission diesel engines. This oil assures outstanding protection against high temperature engine deposits, oil degradation, oil thickening and corrosion. It is recommended for new generation commercial diesel engines operating on heavy duty on-highway and off-highway and DG sets of wide range capacities.",
                        "icon": "/img/about/oil.png",
                        "benefits": [
                            {
                                "title": "High Temperature Protection",
                                "content": "Provides excellent protection against engine deposits and oil degradation at high temperatures."
                            },
                            {
                                "title": "Corrosion Prevention",
                                "content": "Ensures corrosion protection for enhanced engine life."
                            },
                            {
                                "title": "Multi-purpose Application",
                                "content": "Suitable for new generation commercial diesel engines in on-highway and off-highway use."
                            },
                            {
                                "title": "Wide Compatibility",
                                "content": "Recommended for DG sets of wide range capacities."
                            }
                        ],
                        "table": {
                            "tableHead": ["#", "SAE GRADE", "CLG CF-4 10W-30"],
                            "tableData": [
                                { "head": "Kin. Vis. cSt @100°C", "body": "10-11.5" },
                                { "head": "Viscosity Index, Min.", "body": "130" },
                                { "head": "Flash Point (COC) °C Min", "body": "190" },
                                { "head": "Pour Point °C Max.", "body": "-27" },
                                { "head": "TBN, mg KOH /gm, Min", "body": "8.0" }
                            ]
                        },
                        facilities: [
                            {
                                type: "Intermediate Bulk Containers ( IBC )",
                                subTitle: 'Typically 1,000 liters (264 gallons), but can range from 500 to 1,250 liters',
                                description: ' IBCs are large, reusable containers designed for bulk liquids, chemicals, and other materials. They are made from materials such as plastic, steel, or composite materials and often come in a cubic shape for efficient storage and transport.',
                                image: 'https://rctrips.com/assets/itinerary/radisson-hyland-hotel-1.jpeg'
                            },
                            {
                                type: "Drums",
                                subTitle: 'The standard drum in the petroleum industry holds 200 liters (also referred to as a 55-gallon drum in the U.S.)',
                                description: ' Drums are cylindrical containers made of steel or plastic, used for transporting liquids such as oil, lubricants, and other petrochemical products. Other drum capacities include **100 liters* (26 gallons) and smaller sizes like *30 liters*',
                                image: 'https://rctrips.com/assets/itinerary/led-china-4.jpeg'
                            },
                            {
                                type: "Pails",
                                subTitle: 'Typically 18-20 liters (around 5 gallons)',
                                description: 'Pails are small cylindrical containers, usually made of metal or plastic, used for packaging smaller amounts of petroleum products like lubricants or chemicals.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-2.jpg'
                            },
                            {
                                type: "Medium / Small sized containers",
                                subTitle: 'These containers can range from 1 to 50 liters',
                                description: 'They include cans, jugs, and other small packaging units designed for easier handling and distribution of lubricants, chemicals, or other petroleum products.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-3.jpg'
                            },
                        ]
                    },
                    {
                        "id": 2233990,
                        "title": "CLG CH-4 engine oil",
                        "sid": "CLG-ch-4-engine-oil",
                        "description": "It is a certified premium quality diesel engine oil, designed for severe performance requirement of new generation commercial vehicles for on highway and off highway operations, for engines complying to Euro III, for Diesel fuels ranging in Sulphur content up to 0.3% by wt. It is recommended for diesel vehicles of Maruti Suzuki, Ashok Leyland, Tata Motors and VECV requiring CH-4 oil.",
                        "icon": "/img/about/oil.png",
                        "benefits": [
                            {
                                "title": "Severe Duty Protection",
                                "content": "Designed for severe performance requirements in on-highway and off-highway operations."
                            },
                            {
                                "title": "Euro III Compliance",
                                "content": "Meets Euro III standards for emissions and performance."
                            },
                            {
                                "title": "Extended Compatibility",
                                "content": "Recommended for diesel vehicles from Maruti Suzuki, Ashok Leyland, Tata Motors, and VECV."
                            },
                            {
                                "title": "Sulphur Tolerance",
                                "content": "Performs well with diesel fuels containing up to 0.3% Sulphur."
                            }
                        ],
                        "table": {
                            "tableHead": ["#", "SAE GRADE", "CLG CF-4 10W-30"],
                            "tableData": [
                                { "head": "Kin. Vis. cSt @100°C", "body": "14-15.5" },
                                { "head": "Viscosity Index, Min.", "body": "135" },
                                { "head": "Flash Point (COC) °C Min", "body": "215" },
                                { "head": "Pour Point °C Max.", "body": "-27" },
                                { "head": "TBN, mg KOH /gm, Min", "body": "10" }
                            ]
                        },
                        facilities: [
                            {
                                type: "Intermediate Bulk Containers ( IBC )",
                                subTitle: 'Typically 1,000 liters (264 gallons), but can range from 500 to 1,250 liters',
                                description: ' IBCs are large, reusable containers designed for bulk liquids, chemicals, and other materials. They are made from materials such as plastic, steel, or composite materials and often come in a cubic shape for efficient storage and transport.',
                                image: 'https://rctrips.com/assets/itinerary/radisson-hyland-hotel-1.jpeg'
                            },
                            {
                                type: "Drums",
                                subTitle: 'The standard drum in the petroleum industry holds 200 liters (also referred to as a 55-gallon drum in the U.S.)',
                                description: ' Drums are cylindrical containers made of steel or plastic, used for transporting liquids such as oil, lubricants, and other petrochemical products. Other drum capacities include **100 liters* (26 gallons) and smaller sizes like *30 liters*',
                                image: 'https://rctrips.com/assets/itinerary/led-china-4.jpeg'
                            },
                            {
                                type: "Pails",
                                subTitle: 'Typically 18-20 liters (around 5 gallons)',
                                description: 'Pails are small cylindrical containers, usually made of metal or plastic, used for packaging smaller amounts of petroleum products like lubricants or chemicals.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-2.jpg'
                            },
                            {
                                type: "Medium / Small sized containers",
                                subTitle: 'These containers can range from 1 to 50 liters',
                                description: 'They include cans, jugs, and other small packaging units designed for easier handling and distribution of lubricants, chemicals, or other petroleum products.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-3.jpg'
                            },
                        ]
                    },
                    {
                        "id": 9988590,
                        "title": "CLG CI-4 engine oil",
                        "sid": "CLG-ci-4-engine-oil",
                        "description": "It is a certified premium quality diesel engine oil, designed for severe performance requirement of new generation commercial vehicles for on highway and off highway operations, for engines complying to Euro III, for diesel fuels ranging in Sulphur content up to 0.05% by wt. It provides outstanding protection against high temperature engine deposits, oil degradation, and control of soot induced thickening, corrosive wear and valve train wear. It can also lubricate engines requiring API CH-4, CG-4 & CF-4. It is recommended for diesel vehicles of Maruti Suzuki, Ashok Leyland, Tata Motors and VECV requiring CI-4 oil with enhanced drain period.",
                        "icon": "/img/about/oil.png",
                        "benefits": [
                            {
                                "title": "Extended Drain Interval",
                                "content": "Supports extended drain intervals for diesel engines."
                            },
                            {
                                "title": "High Temperature Stability",
                                "content": "Offers outstanding protection against high temperature deposits and oil degradation."
                            },
                            {
                                "title": "Versatile Compatibility",
                                "content": "Compatible with API CH-4, CG-4, and CF-4 engines."
                            },
                            {
                                "title": "Sulphur Tolerance",
                                "content": "Designed to handle diesel fuels with up to 0.05% Sulphur content."
                            }
                        ],
                        "table": {
                            "tableHead": ["#", "SAE GRADE", "CLG CF-4 10W-30"],
                            "tableData": [
                                { "head": "Kin. Vis. cSt @100°C", "body": "14-15.5" },
                                { "head": "Viscosity Index, Min.", "body": "135" },
                                { "head": "Flash Point (COC) °C Min", "body": "200" },
                                { "head": "Pour Point °C Max.", "body": "-27" },
                                { "head": "TBN, mg KOH /gm, Min", "body": "10" }
                            ]
                        },
                        facilities: [
                            {
                                type: "Intermediate Bulk Containers ( IBC )",
                                subTitle: 'Typically 1,000 liters (264 gallons), but can range from 500 to 1,250 liters',
                                description: ' IBCs are large, reusable containers designed for bulk liquids, chemicals, and other materials. They are made from materials such as plastic, steel, or composite materials and often come in a cubic shape for efficient storage and transport.',
                                image: 'https://rctrips.com/assets/itinerary/radisson-hyland-hotel-1.jpeg'
                            },
                            {
                                type: "Drums",
                                subTitle: 'The standard drum in the petroleum industry holds 200 liters (also referred to as a 55-gallon drum in the U.S.)',
                                description: ' Drums are cylindrical containers made of steel or plastic, used for transporting liquids such as oil, lubricants, and other petrochemical products. Other drum capacities include **100 liters* (26 gallons) and smaller sizes like *30 liters*',
                                image: 'https://rctrips.com/assets/itinerary/led-china-4.jpeg'
                            },
                            {
                                type: "Pails",
                                subTitle: 'Typically 18-20 liters (around 5 gallons)',
                                description: 'Pails are small cylindrical containers, usually made of metal or plastic, used for packaging smaller amounts of petroleum products like lubricants or chemicals.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-2.jpg'
                            },
                            {
                                type: "Medium / Small sized containers",
                                subTitle: 'These containers can range from 1 to 50 liters',
                                description: 'They include cans, jugs, and other small packaging units designed for easier handling and distribution of lubricants, chemicals, or other petroleum products.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-3.jpg'
                            },
                        ]
                    },
                    {
                        "id": 112545,
                        "title": "CLG CI-4 PLUS engine oil",
                        "sid": "CLG-ci-4-plus-engine-oil",
                        "description": "It is a certified premium quality Diesel Engine Oil, designed for severe performance requirement of new generation commercial vehicles with EGR, for on highway and off highway operations, for engines complying to Euro III / IV, for Diesel fuels ranging in Sulphur content up to 0.05% by wt.. It provides outstanding protection against high temperature engine deposits, oil degradation, Control of soot induced thickening, corrosive wear and valve train wear. It is recommended for diesel vehicles of Ashok Leyland, Tata Motors and VECV requiring CI-4 PLUS oil with enhanced drain period.",
                        "icon": "/img/about/oil.png",
                        "benefits": [
                            {
                                "title": "EGR Compatibility",
                                "content": "Designed for engines equipped with Exhaust Gas Recirculation (EGR) systems."
                            },
                            {
                                "title": "Enhanced Drain Period",
                                "content": "Supports extended drain intervals in heavy-duty diesel engines."
                            },
                            {
                                "title": "Euro III/IV Compliant",
                                "content": "Meets emissions requirements for Euro III and Euro IV vehicles."
                            },
                            {
                                "title": "High Temperature and Soot Protection",
                                "content": "Offers exceptional protection against high temperature deposits and soot-induced thickening."
                            }
                        ],
                        "table": {
                            "tableHead": ["#", "SAE GRADE", "CLG CF-4 10W-30"],
                            "tableData": [
                                { "head": "Kin. Vis. cSt @100°C", "body": "14-15.5" },
                                { "head": "Viscosity Index, Min.", "body": "140" },
                                { "head": "Flash Point (COC) °C Min", "body": "215" },
                                { "head": "Pour Point °C Max.", "body": "-27" },
                                { "head": "TBN, mg KOH /gm, Min", "body": "10" }
                            ]
                        },
                        facilities: [
                            {
                                type: "Intermediate Bulk Containers ( IBC )",
                                subTitle: 'Typically 1,000 liters (264 gallons), but can range from 500 to 1,250 liters',
                                description: ' IBCs are large, reusable containers designed for bulk liquids, chemicals, and other materials. They are made from materials such as plastic, steel, or composite materials and often come in a cubic shape for efficient storage and transport.',
                                image: 'https://rctrips.com/assets/itinerary/radisson-hyland-hotel-1.jpeg'
                            },
                            {
                                type: "Drums",
                                subTitle: 'The standard drum in the petroleum industry holds 200 liters (also referred to as a 55-gallon drum in the U.S.)',
                                description: ' Drums are cylindrical containers made of steel or plastic, used for transporting liquids such as oil, lubricants, and other petrochemical products. Other drum capacities include **100 liters* (26 gallons) and smaller sizes like *30 liters*',
                                image: 'https://rctrips.com/assets/itinerary/led-china-4.jpeg'
                            },
                            {
                                type: "Pails",
                                subTitle: 'Typically 18-20 liters (around 5 gallons)',
                                description: 'Pails are small cylindrical containers, usually made of metal or plastic, used for packaging smaller amounts of petroleum products like lubricants or chemicals.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-2.jpg'
                            },
                            {
                                type: "Medium / Small sized containers",
                                subTitle: 'These containers can range from 1 to 50 liters',
                                description: 'They include cans, jugs, and other small packaging units designed for easier handling and distribution of lubricants, chemicals, or other petroleum products.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-3.jpg'
                            },
                        ]
                    }
                ]
            },
            {
                id: 76786123,
                "title": "Industrial lubricating oils",
                sid: "industrial-lubricating-oils",
                "description": "The AP-3 Grease Test Report details the comprehensive testing and performance metrics of AP-3 grease, ensuring its reliability in various industrial and automotive applications.",
                "icon": "/img/about/oil.png",
                route: '/oil-list/',
                category: 'oils',
                brand: 'CLG',
                products: [
                    {
                        "id": 66734,
                        "title": "industrial gear oils",
                        "sid": "industrial-gear-oils",
                        "description": "These are premium quality industrial gear lubricants having excellent thermal and oxidation stability, low foaming tendency, good demulsibility and protection from rust and corrosion.",
                        "icon": "/img/about/oil.png",
                        "benefits": [
                            {
                                "title": "Thermal and Oxidation Stability",
                                "content": "Offers excellent resistance to high temperatures and oxidation, ensuring longer oil life."
                            },
                            {
                                "title": "Low Foaming Tendency",
                                "content": "Reduces foaming, maintaining smooth operation of gear systems."
                            },
                            {
                                "title": "Good Demulsibility",
                                "content": "Separates water effectively, preventing emulsions that could affect gear performance."
                            },
                            {
                                "title": "Rust and Corrosion Protection",
                                "content": "Provides outstanding protection against rust and corrosion, ensuring extended gear life."
                            }
                        ],
                        "table": {
                            "tableHead": ["#", "ISO VG GRADE", "VG 150"],
                            "tableData": [
                                { "head": "Kin.Vis. cSt, 40°C", "body": "135-165" },
                                { "head": "Viscosity Index, Min.", "body": "90" },
                                { "head": "Pour Point °C Max.", "body": "-6" },
                                { "head": "Flash Point (COC) °C Min", "body": "200" }
                            ]
                        },
                        facilities: [
                            {
                                type: "Intermediate Bulk Containers ( IBC )",
                                subTitle: 'Typically 1,000 liters (264 gallons), but can range from 500 to 1,250 liters',
                                description: ' IBCs are large, reusable containers designed for bulk liquids, chemicals, and other materials. They are made from materials such as plastic, steel, or composite materials and often come in a cubic shape for efficient storage and transport.',
                                image: 'https://rctrips.com/assets/itinerary/radisson-hyland-hotel-1.jpeg'
                            },
                            {
                                type: "Drums",
                                subTitle: 'The standard drum in the petroleum industry holds 200 liters (also referred to as a 55-gallon drum in the U.S.)',
                                description: ' Drums are cylindrical containers made of steel or plastic, used for transporting liquids such as oil, lubricants, and other petrochemical products. Other drum capacities include **100 liters* (26 gallons) and smaller sizes like *30 liters*',
                                image: 'https://rctrips.com/assets/itinerary/led-china-4.jpeg'
                            },
                            {
                                type: "Pails",
                                subTitle: 'Typically 18-20 liters (around 5 gallons)',
                                description: 'Pails are small cylindrical containers, usually made of metal or plastic, used for packaging smaller amounts of petroleum products like lubricants or chemicals.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-2.jpg'
                            },
                            {
                                type: "Medium / Small sized containers",
                                subTitle: 'These containers can range from 1 to 50 liters',
                                description: 'They include cans, jugs, and other small packaging units designed for easier handling and distribution of lubricants, chemicals, or other petroleum products.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-3.jpg'
                            },
                        ]
                    },
                    {
                        "id": 6602,
                        "title": "industrial AW hydraulic oils",
                        "sid": "industrial-aw-hydraulic-oils",
                        "description": "Hydraulic lubricants provides the medium by which power is transferred in hydraulic machinery. CLG manufactures the following industrial AW hydraulic oils.",
                        "icon": "/img/about/oil.png",
                        "benefits": [
                            {
                                "title": "Power Transmission",
                                "content": "Enables efficient power transfer in hydraulic systems."
                            },
                            {
                                "title": "Excellent Thermal Stability",
                                "content": "Provides thermal stability, preventing breakdown in high-temperature operations."
                            },
                            {
                                "title": "Rust and Corrosion Protection",
                                "content": "Prevents rust and corrosion, extending the life of hydraulic systems."
                            },
                            {
                                "title": "Enhanced Demulsibility",
                                "content": "Easily separates water, ensuring uninterrupted system performance."
                            }
                        ],
                        "table": {
                            "tableHead": ["#", "ISO VG GRADE", "CLG Hydraulic Oil AW"],
                            "tableData": [
                                { "head": "Kin.Vis. cSt, 40°C", "body": "28.8-35.2" },
                                { "head": "Viscosity Index, Min.", "body": "90" },
                                { "head": "Pour Point °C Max.", "body": "-3" },
                                { "head": "Flash Point (COC) °C Min", "body": "180" },
                                { "head": "Demulsibility Characteristics ASTM D-1401, Max", "body": "40-37-3 (20)" }
                            ]
                        },
                        facilities: [
                            {
                                type: "Intermediate Bulk Containers ( IBC )",
                                subTitle: 'Typically 1,000 liters (264 gallons), but can range from 500 to 1,250 liters',
                                description: ' IBCs are large, reusable containers designed for bulk liquids, chemicals, and other materials. They are made from materials such as plastic, steel, or composite materials and often come in a cubic shape for efficient storage and transport.',
                                image: 'https://rctrips.com/assets/itinerary/radisson-hyland-hotel-1.jpeg'
                            },
                            {
                                type: "Drums",
                                subTitle: 'The standard drum in the petroleum industry holds 200 liters (also referred to as a 55-gallon drum in the U.S.)',
                                description: ' Drums are cylindrical containers made of steel or plastic, used for transporting liquids such as oil, lubricants, and other petrochemical products. Other drum capacities include **100 liters* (26 gallons) and smaller sizes like *30 liters*',
                                image: 'https://rctrips.com/assets/itinerary/led-china-4.jpeg'
                            },
                            {
                                type: "Pails",
                                subTitle: 'Typically 18-20 liters (around 5 gallons)',
                                description: 'Pails are small cylindrical containers, usually made of metal or plastic, used for packaging smaller amounts of petroleum products like lubricants or chemicals.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-2.jpg'
                            },
                            {
                                type: "Medium / Small sized containers",
                                subTitle: 'These containers can range from 1 to 50 liters',
                                description: 'They include cans, jugs, and other small packaging units designed for easier handling and distribution of lubricants, chemicals, or other petroleum products.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-3.jpg'
                            },
                        ]
                    },
                    {
                        "id": 9932,
                        "title": "industrial Hydraulic HLP oils",
                        "sid": "industrial-hydraulic-hlp-oils",
                        "description": "These Hydraulic HLP oils of premium quality, recommended for high performance electro-hydraulic systems.",
                        "icon": "/img/about/oil.png",
                        "benefits": [
                            {
                                "title": "High Performance",
                                "content": "Optimized for electro-hydraulic systems requiring precision and high efficiency."
                            },
                            {
                                "title": "Thermal Stability",
                                "content": "Provides excellent thermal stability, preventing system breakdown in high temperatures."
                            },
                            {
                                "title": "Enhanced System Protection",
                                "content": "Prevents rust, corrosion, and wear, ensuring long system life."
                            },
                            {
                                "title": "Smooth Operation",
                                "content": "Offers low wear and friction, resulting in smooth hydraulic operation."
                            }
                        ],
                        "table": {
                            "tableHead": ["#", "ISO VG GRADE", "CLG Hydraulic Oil HLP"],
                            "tableData": [
                                { "head": "Kin.Vis. cSt, 40°C", "body": "28.8-35.2" },
                                { "head": "Viscosity Index, Min.", "body": "90" },
                                { "head": "Pour Point °C Max.", "body": "-6" },
                                { "head": "Flash Point (COC) °C Min", "body": "200" }
                            ]
                        },
                        facilities: [
                            {
                                type: "Intermediate Bulk Containers ( IBC )",
                                subTitle: 'Typically 1,000 liters (264 gallons), but can range from 500 to 1,250 liters',
                                description: ' IBCs are large, reusable containers designed for bulk liquids, chemicals, and other materials. They are made from materials such as plastic, steel, or composite materials and often come in a cubic shape for efficient storage and transport.',
                                image: 'https://rctrips.com/assets/itinerary/radisson-hyland-hotel-1.jpeg'
                            },
                            {
                                type: "Drums",
                                subTitle: 'The standard drum in the petroleum industry holds 200 liters (also referred to as a 55-gallon drum in the U.S.)',
                                description: ' Drums are cylindrical containers made of steel or plastic, used for transporting liquids such as oil, lubricants, and other petrochemical products. Other drum capacities include **100 liters* (26 gallons) and smaller sizes like *30 liters*',
                                image: 'https://rctrips.com/assets/itinerary/led-china-4.jpeg'
                            },
                            {
                                type: "Pails",
                                subTitle: 'Typically 18-20 liters (around 5 gallons)',
                                description: 'Pails are small cylindrical containers, usually made of metal or plastic, used for packaging smaller amounts of petroleum products like lubricants or chemicals.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-2.jpg'
                            },
                            {
                                type: "Medium / Small sized containers",
                                subTitle: 'These containers can range from 1 to 50 liters',
                                description: 'They include cans, jugs, and other small packaging units designed for easier handling and distribution of lubricants, chemicals, or other petroleum products.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-3.jpg'
                            },
                        ]
                    },
                    {
                        "id": 702345,
                        "title": "industrial Circulation Oil",
                        "sid": "industrial-circulation-oil",
                        "description": "These are premium quality R&O type hydraulic oils formulated with superior quality hydro treated base stocks. These are recommended for hydraulic system, circulation system of industrial Gear boxes, air compressors.",
                        "icon": "/img/about/oil.png",
                        "benefits": [
                            {
                                "title": "R&O Formulation",
                                "content": "Formulated for outstanding resistance to rust and oxidation, providing long-term protection."
                            },
                            {
                                "title": "Superior Base Stocks",
                                "content": "Made from hydro treated base stocks for enhanced performance and stability."
                            },
                            {
                                "title": "Wide Application",
                                "content": "Suitable for hydraulic systems, circulation systems, gearboxes, and air compressors."
                            },
                            {
                                "title": "Enhanced Lubrication",
                                "content": "Provides smooth and efficient lubrication for industrial applications."
                            }
                        ],
                        "table": {
                            "tableHead": ["#", "ISO VG GRADE", "CLG Circulation Oil"],
                            "tableData": [
                                { "head": "Kin.Vis. cSt, 40°C", "body": "28.8-35.2" },
                                { "head": "Viscosity Index, Min.", "body": "90" },
                                { "head": "Pour Point °C Max.", "body": "-6" },
                                { "head": "Flash Point (COC) °C Min", "body": "200" }
                            ]
                        },
                        facilities: [
                            {
                                type: "Intermediate Bulk Containers ( IBC )",
                                subTitle: 'Typically 1,000 liters (264 gallons), but can range from 500 to 1,250 liters',
                                description: ' IBCs are large, reusable containers designed for bulk liquids, chemicals, and other materials. They are made from materials such as plastic, steel, or composite materials and often come in a cubic shape for efficient storage and transport.',
                                image: 'https://rctrips.com/assets/itinerary/radisson-hyland-hotel-1.jpeg'
                            },
                            {
                                type: "Drums",
                                subTitle: 'The standard drum in the petroleum industry holds 200 liters (also referred to as a 55-gallon drum in the U.S.)',
                                description: ' Drums are cylindrical containers made of steel or plastic, used for transporting liquids such as oil, lubricants, and other petrochemical products. Other drum capacities include **100 liters* (26 gallons) and smaller sizes like *30 liters*',
                                image: 'https://rctrips.com/assets/itinerary/led-china-4.jpeg'
                            },
                            {
                                type: "Pails",
                                subTitle: 'Typically 18-20 liters (around 5 gallons)',
                                description: 'Pails are small cylindrical containers, usually made of metal or plastic, used for packaging smaller amounts of petroleum products like lubricants or chemicals.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-2.jpg'
                            },
                            {
                                type: "Medium / Small sized containers",
                                subTitle: 'These containers can range from 1 to 50 liters',
                                description: 'They include cans, jugs, and other small packaging units designed for easier handling and distribution of lubricants, chemicals, or other petroleum products.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-3.jpg'
                            },
                        ]
                    },
                    {
                        "id": 234786,
                        "title": "industrial heat transfer Oil",
                        "sid": "industrial-heat-transfer-oil",
                        "description": "Mineral oil based for heat transfer systems with forced circulation. It has excellent thermal efficiency & stability for long life. It provides Good rust & corrosion protection with ease of pumping / circulation and minimized make up oil.",
                        "icon": "/img/about/oil.png",
                        "benefits": [
                            {
                                "title": "Thermal Efficiency",
                                "content": "Offers excellent thermal efficiency, ensuring energy savings in heat transfer systems."
                            },
                            {
                                "title": "Long Life",
                                "content": "Provides stability for long service life in heat transfer systems."
                            },
                            {
                                "title": "Rust and Corrosion Protection",
                                "content": "Prevents rust and corrosion, extending the life of the system."
                            },
                            {
                                "title": "Easy Circulation",
                                "content": "Ensures ease of pumping and circulation with minimal make-up oil required."
                            }
                        ],
                        "table": {
                            "tableHead": ["#", "ISO VG GRADE", "CLG THERM Oil 22"],
                            "tableData": [
                                { "head": "Kin.Vis. cSt, 40°C", "body": "20-26" },
                                { "head": "Kin.Vis. cSt, 100°C", "body": "4.5-5.0" },
                                { "head": "Viscosity Index, Min.", "body": "100" },
                                { "head": "Pour Point °C Max.", "body": "-8" },
                                { "head": "Flash Point (COC) °C Min", "body": "210" }
                            ]
                        },
                        facilities: [
                            {
                                type: "Intermediate Bulk Containers ( IBC )",
                                subTitle: 'Typically 1,000 liters (264 gallons), but can range from 500 to 1,250 liters',
                                description: ' IBCs are large, reusable containers designed for bulk liquids, chemicals, and other materials. They are made from materials such as plastic, steel, or composite materials and often come in a cubic shape for efficient storage and transport.',
                                image: 'https://rctrips.com/assets/itinerary/radisson-hyland-hotel-1.jpeg'
                            },
                            {
                                type: "Drums",
                                subTitle: 'The standard drum in the petroleum industry holds 200 liters (also referred to as a 55-gallon drum in the U.S.)',
                                description: ' Drums are cylindrical containers made of steel or plastic, used for transporting liquids such as oil, lubricants, and other petrochemical products. Other drum capacities include **100 liters* (26 gallons) and smaller sizes like *30 liters*',
                                image: 'https://rctrips.com/assets/itinerary/led-china-4.jpeg'
                            },
                            {
                                type: "Pails",
                                subTitle: 'Typically 18-20 liters (around 5 gallons)',
                                description: 'Pails are small cylindrical containers, usually made of metal or plastic, used for packaging smaller amounts of petroleum products like lubricants or chemicals.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-2.jpg'
                            },
                            {
                                type: "Medium / Small sized containers",
                                subTitle: 'These containers can range from 1 to 50 liters',
                                description: 'They include cans, jugs, and other small packaging units designed for easier handling and distribution of lubricants, chemicals, or other petroleum products.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-3.jpg'
                            },
                        ]
                    },
                    {
                        "id": 334912,
                        "title": "industrial spindle Oil",
                        "sid": "industrial-spindle-oil",
                        "description": "SGL Spin well 10 is R & O type spindle oil for the lubrication of high speed spindles. It is prepared from low viscosity solvent refined to provide extended performance at high speed.",
                        "icon": "/img/about/oil.png",
                        "benefits": [
                            {
                                "title": "Low Viscosity",
                                "content": "Prepared from low viscosity solvent, ensuring smooth lubrication for high-speed spindles."
                            },
                            {
                                "title": "Extended Performance",
                                "content": "Provides extended performance even under high-speed operations."
                            },
                            {
                                "title": "R&O Protection",
                                "content": "Offers rust and oxidation protection for longer spindle life."
                            },
                            {
                                "title": "High Speed Efficiency",
                                "content": "Ideal for high-speed spindles, ensuring smooth and efficient performance."
                            }
                        ],
                        "table": {
                            "tableHead": ["#", "ISO VG GRADE", "CLG SPINWELL 10"],
                            "tableData": [
                                { "head": "Kin.Vis. cSt, 40°C", "body": "9-13.5" },
                                { "head": "Kin.Vis. cSt, 100°C", "body": "3.41" },
                                { "head": "Viscosity Index, Min.", "body": "133" },
                                { "head": "Pour Point °C Max.", "body": "-15" },
                                { "head": "Flash Point (COC) °C Min", "body": "144" }
                            ]
                        },
                        facilities: [
                            {
                                type: "Intermediate Bulk Containers ( IBC )",
                                subTitle: 'Typically 1,000 liters (264 gallons), but can range from 500 to 1,250 liters',
                                description: ' IBCs are large, reusable containers designed for bulk liquids, chemicals, and other materials. They are made from materials such as plastic, steel, or composite materials and often come in a cubic shape for efficient storage and transport.',
                                image: 'https://rctrips.com/assets/itinerary/radisson-hyland-hotel-1.jpeg'
                            },
                            {
                                type: "Drums",
                                subTitle: 'The standard drum in the petroleum industry holds 200 liters (also referred to as a 55-gallon drum in the U.S.)',
                                description: ' Drums are cylindrical containers made of steel or plastic, used for transporting liquids such as oil, lubricants, and other petrochemical products. Other drum capacities include **100 liters* (26 gallons) and smaller sizes like *30 liters*',
                                image: 'https://rctrips.com/assets/itinerary/led-china-4.jpeg'
                            },
                            {
                                type: "Pails",
                                subTitle: 'Typically 18-20 liters (around 5 gallons)',
                                description: 'Pails are small cylindrical containers, usually made of metal or plastic, used for packaging smaller amounts of petroleum products like lubricants or chemicals.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-2.jpg'
                            },
                            {
                                type: "Medium / Small sized containers",
                                subTitle: 'These containers can range from 1 to 50 liters',
                                description: 'They include cans, jugs, and other small packaging units designed for easier handling and distribution of lubricants, chemicals, or other petroleum products.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-3.jpg'
                            },
                        ]
                    }
                ]

            },
            {
                id: 66474,
                "title": "Specification based oils",
                sid: "specification-based-oils",
                "description": "Crusher Grease 2 is a high-performance grease designed for use in heavy-duty machinery. It offers excellent protection against extreme pressure and is ideal for use in crushers and other industrial equipment.",
                "icon": "/img/about/oil.png",
                route: '/oil-list/',
                category: 'oils',
                brand: 'CLG',
                products: [
                    {
                        "id": 881234,
                        "title": "Jss 9150",
                        "sid": "jss-9150",
                        "description": "SGL Defence grade OX-52 which is also known as rifle / gun oil meets JSS: 9150-11 are made from premium quality base stocks and other necessary additives. Gun Oil is an all-weather lubricant. Recommended and used by major firearm manufacturers. It is used as a preservative and as a cleaning agent for small guns and machine guns at medium and high temperatures. It is not recommended where oils is in prolonged contact with brass material. Great for general lubrication on all sporting arms such as pump, over/under and side by side shotguns, bolt and lever action rifles and revolvers.",
                        "icon": "/img/about/oil.png",
                        "benefits": [
                            {
                                "title": "All-Weather Lubrication",
                                "content": "Provides reliable lubrication in various weather conditions, ensuring consistent performance."
                            },
                            {
                                "title": "Premium Quality Base Stocks",
                                "content": "Manufactured from high-quality base stocks and additives for superior performance."
                            },
                            {
                                "title": "Preservation and Cleaning",
                                "content": "Functions effectively as a preservative and cleaning agent for firearms."
                            },
                            {
                                "title": "General Lubrication for Sporting Arms",
                                "content": "Ideal for general lubrication of various types of sporting arms, including shotguns and rifles."
                            },
                            {
                                "title": "Temperature Tolerance",
                                "content": "Suitable for use in medium and high temperatures, enhancing versatility."
                            }
                        ],
                        "table": {
                            "tableHead": ["#", "Properties", "Value"],
                            "tableData": [
                                { "head": "Kinematic viscosity, 40°c, cSt", "body": "40 – 52" },
                                { "head": "Neutrality, pH value", "body": "8 – 9" },
                                { "head": "Flash point, pmcc, °C, Min", "body": "163" },
                                { "head": "Pour point, °C , Max", "body": "0" },
                                { "head": "Oleic acid, % wt.", "body": "13.5 – 14.1" }
                            ]
                        },
                        facilities: [
                            {
                                type: "Intermediate Bulk Containers ( IBC )",
                                subTitle: 'Typically 1,000 liters (264 gallons), but can range from 500 to 1,250 liters',
                                description: ' IBCs are large, reusable containers designed for bulk liquids, chemicals, and other materials. They are made from materials such as plastic, steel, or composite materials and often come in a cubic shape for efficient storage and transport.',
                                image: 'https://rctrips.com/assets/itinerary/radisson-hyland-hotel-1.jpeg'
                            },
                            {
                                type: "Drums",
                                subTitle: 'The standard drum in the petroleum industry holds 200 liters (also referred to as a 55-gallon drum in the U.S.)',
                                description: ' Drums are cylindrical containers made of steel or plastic, used for transporting liquids such as oil, lubricants, and other petrochemical products. Other drum capacities include **100 liters* (26 gallons) and smaller sizes like *30 liters*',
                                image: 'https://rctrips.com/assets/itinerary/led-china-4.jpeg'
                            },
                            {
                                type: "Pails",
                                subTitle: 'Typically 18-20 liters (around 5 gallons)',
                                description: 'Pails are small cylindrical containers, usually made of metal or plastic, used for packaging smaller amounts of petroleum products like lubricants or chemicals.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-2.jpg'
                            },
                            {
                                type: "Medium / Small sized containers",
                                subTitle: 'These containers can range from 1 to 50 liters',
                                description: 'They include cans, jugs, and other small packaging units designed for easier handling and distribution of lubricants, chemicals, or other petroleum products.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-3.jpg'
                            },
                        ]
                    },
                    {
                        "id": 449076,
                        "title": "IS 1118",
                        "sid": "is-1118",
                        "description": "SGL 80W-90 GL-5, SGL 85W-140 GL-5, and SGL 80W-90 GL-4, SGL Gear Oil 140 EP Type GL-5 are all automotive gear lubricating oils meeting IS 1118 exclusively made for Defence using especially selected high viscosity index base stocks and contains various additives which imparts extreme pressure, anti-rust, anticorrosion and anti-oxidation characteristics. These are formulated to meet the rigorous service demand of commercial fleet mechanical transmissions, axles and gear boxes. These lubricants are primarily intended for use in automotive hypoid gear units, manual transmissions, final drives, steering gears and fluid lubricated universal joints of automotive equipment. It is ideal for vehicles operating in areas where ambient temperature vary widely.",
                        "icon": "/img/about/oil.png",
                        "benefits": [
                            {
                                "title": "Extreme Pressure Protection",
                                "content": "Provides superior protection under extreme pressure conditions, ensuring durability."
                            },
                            {
                                "title": "Anti-Rust and Anti-Corrosion",
                                "content": "Protects against rust and corrosion, extending the life of automotive components."
                            },
                            {
                                "title": "Anti-Oxidation Properties",
                                "content": "Prevents oxidation, maintaining oil performance over time."
                            },
                            {
                                "title": "Versatile Application",
                                "content": "Suitable for a wide range of automotive applications including gear units, manual transmissions, and steering gears."
                            },
                            {
                                "title": "Temperature Versatility",
                                "content": "Ideal for use in areas with varying ambient temperatures, ensuring reliable performance."
                            }
                        ],
                        facilities: [
                            {
                                type: "Intermediate Bulk Containers ( IBC )",
                                subTitle: 'Typically 1,000 liters (264 gallons), but can range from 500 to 1,250 liters',
                                description: ' IBCs are large, reusable containers designed for bulk liquids, chemicals, and other materials. They are made from materials such as plastic, steel, or composite materials and often come in a cubic shape for efficient storage and transport.',
                                image: 'https://rctrips.com/assets/itinerary/radisson-hyland-hotel-1.jpeg'
                            },
                            {
                                type: "Drums",
                                subTitle: 'The standard drum in the petroleum industry holds 200 liters (also referred to as a 55-gallon drum in the U.S.)',
                                description: ' Drums are cylindrical containers made of steel or plastic, used for transporting liquids such as oil, lubricants, and other petrochemical products. Other drum capacities include **100 liters* (26 gallons) and smaller sizes like *30 liters*',
                                image: 'https://rctrips.com/assets/itinerary/led-china-4.jpeg'
                            },
                            {
                                type: "Pails",
                                subTitle: 'Typically 18-20 liters (around 5 gallons)',
                                description: 'Pails are small cylindrical containers, usually made of metal or plastic, used for packaging smaller amounts of petroleum products like lubricants or chemicals.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-2.jpg'
                            },
                            {
                                type: "Medium / Small sized containers",
                                subTitle: 'These containers can range from 1 to 50 liters',
                                description: 'They include cans, jugs, and other small packaging units designed for easier handling and distribution of lubricants, chemicals, or other petroleum products.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-3.jpg'
                            },
                        ]
                    },
                    {
                        "id": 12349876543,
                        "title": "IS 13656",
                        "sid": "is-13656",
                        "description": "SGL 10W-30 CF-4, SGL 10W-40 CF-4, SGL 20W-40 CF-4, SGL 20W-50 CF-4, SGL 15W-40 CF-4 and SGL 15W40 CH-4 are all automotive engine oils meeting IS 13656 produced by premium quality base stocks and additives.",
                        "icon": "/img/about/oil.png",
                        "benefits": [
                            {
                                "title": "Premium Quality Base Stocks",
                                "content": "Formulated from high-quality base stocks for superior engine protection."
                            },
                            {
                                "title": "Enhanced Engine Performance",
                                "content": "Provides excellent lubrication, improving engine efficiency and performance."
                            },
                            {
                                "title": "Wide Viscosity Range",
                                "content": "Available in various viscosities to meet different engine requirements and operating conditions."
                            },
                            {
                                "title": "Extended Oil Life",
                                "content": "Helps in extending the oil change intervals, reducing maintenance frequency."
                            },
                            {
                                "title": "Compatibility with Different Engines",
                                "content": "Suitable for use in various automotive engines, ensuring versatility and broad application."
                            }
                        ],
                        facilities: [
                            {
                                type: "Intermediate Bulk Containers ( IBC )",
                                subTitle: 'Typically 1,000 liters (264 gallons), but can range from 500 to 1,250 liters',
                                description: ' IBCs are large, reusable containers designed for bulk liquids, chemicals, and other materials. They are made from materials such as plastic, steel, or composite materials and often come in a cubic shape for efficient storage and transport.',
                                image: 'https://rctrips.com/assets/itinerary/radisson-hyland-hotel-1.jpeg'
                            },
                            {
                                type: "Drums",
                                subTitle: 'The standard drum in the petroleum industry holds 200 liters (also referred to as a 55-gallon drum in the U.S.)',
                                description: ' Drums are cylindrical containers made of steel or plastic, used for transporting liquids such as oil, lubricants, and other petrochemical products. Other drum capacities include **100 liters* (26 gallons) and smaller sizes like *30 liters*',
                                image: 'https://rctrips.com/assets/itinerary/led-china-4.jpeg'
                            },
                            {
                                type: "Pails",
                                subTitle: 'Typically 18-20 liters (around 5 gallons)',
                                description: 'Pails are small cylindrical containers, usually made of metal or plastic, used for packaging smaller amounts of petroleum products like lubricants or chemicals.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-2.jpg'
                            },
                            {
                                type: "Medium / Small sized containers",
                                subTitle: 'These containers can range from 1 to 50 liters',
                                description: 'They include cans, jugs, and other small packaging units designed for easier handling and distribution of lubricants, chemicals, or other petroleum products.',
                                image: 'https://rctrips.com/assets/itinerary/led-china-3.jpg'
                            },
                        ]
                    }
                ]

            },

        ],
    },
    getters: {
        getGreases: state => state.greases,
        getGrease: (state) => (productId) => {
            let index = state.greases.findIndex(product => product.sid == productId);
            return state.greases[index];
        },

        getOils: state => state.oils,
        getOil: (state) => (productId) => {
            let index = state.oils.findIndex(product => product.sid == productId);
            return state.oils[index];
        },
    },
    mutations: {},
    actions: {},
}