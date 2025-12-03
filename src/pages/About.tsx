import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  const stats = [
    { icon: 'Target', value: '4', label: 'Профессиональных корта' },
    { icon: 'Users', value: '500+', label: 'Активных игроков' },
    { icon: 'Trophy', value: '50+', label: 'Проведено турниров' },
    { icon: 'Clock', value: '24/7', label: 'Работаем для вас' },
  ];

  const team = [
    { name: 'Андрей Павлов', role: 'Директор клуба', experience: '15 лет в спорте' },
    { name: 'Мария Соколова', role: 'Главный тренер', experience: 'Мастер спорта по теннису' },
    { name: 'Дмитрий Козлов', role: 'Тренер', experience: '8 лет опыта' },
    { name: 'Елена Новикова', role: 'Администратор', experience: 'Организация мероприятий' },
  ];

  const features = [
    { icon: 'Award', title: 'Профессиональное оборудование', description: 'Корты соответствуют международным стандартам' },
    { icon: 'Users', title: 'Опытные тренеры', description: 'Команда профессионалов с большим опытом' },
    { icon: 'Heart', title: 'Дружная атмосфера', description: 'Сообщество единомышленников' },
    { icon: 'Zap', title: 'Современная инфраструктура', description: 'Раздевалки, душевые, зона отдыха' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center gap-2">
            <Icon name="Trophy" className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold">Padel club<br/>Завода имени Ильича</span>
          </Link>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link to="/">
              <Icon name="Home" className="mr-2 h-4 w-4" />
              Главная
            </Link>
          </Button>
        </div>
      </header>

      <section className="container px-4 py-12 md:py-16">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">О клубе</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Современный padel клуб с профессиональными кортами и дружной атмосферой
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <Card className="animate-slide-up">
            <CardContent className="pt-8">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Padel club Завода имени Ильича — это современный спортивный комплекс, открытый в 2023 году. 
                Мы создали пространство, где каждый может насладиться динамичной игрой в padel независимо от уровня подготовки.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Наш клуб оснащён 4 профессиональными кортами, отвечающими всем международным стандартам. 
                Мы предлагаем не просто аренду площадок, но и полноценную спортивную инфраструктуру: 
                тренировки с опытными наставниками, регулярные турниры, систему рейтингов и магазин экипировки.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Миссия клуба — популяризация padel в России и создание сильного сообщества игроков. 
                Мы работаем 24/7, чтобы каждый мог найти удобное время для игры.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Наши показатели</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <Card 
                key={idx}
                className="text-center hover:shadow-lg transition-all hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name={stat.icon as any} className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-4xl mb-2">{stat.value}</CardTitle>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Почему выбирают нас</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <Card 
                key={idx}
                className="hover:shadow-lg transition-all animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Icon name={feature.icon as any} className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Наша команда</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <Card 
                key={idx}
                className="text-center hover:shadow-lg transition-all hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardHeader>
                  <div className="mx-auto mb-4 w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <Icon name="User" className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-lg mb-1">{member.name}</CardTitle>
                  <p className="text-sm font-semibold text-primary mb-2">{member.role}</p>
                  <p className="text-xs text-muted-foreground">{member.experience}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-br from-primary/10 to-secondary/10">
            <CardHeader>
              <CardTitle className="text-2xl mb-4">Присоединяйтесь к нам!</CardTitle>
              <p className="text-muted-foreground mb-6">
                Станьте частью нашего сообщества и откройте для себя мир padel
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link to="/courts">
                    <Icon name="Calendar" className="mr-2 h-5 w-5" />
                    Забронировать корт
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/services">
                    <Icon name="Info" className="mr-2 h-5 w-5" />
                    Узнать больше
                  </Link>
                </Button>
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default About;
